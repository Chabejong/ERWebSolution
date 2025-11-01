import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

console.log("=== Server startup initiated ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT || "5000 (default)");
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ Set" : "✗ Not set");

const app = express();

// Trust proxy - required for Replit deployments where SSL terminates at edge
app.set('trust proxy', 1);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "cn3m-admin-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: 'lax', // Required for cookies to work in modern browsers
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    console.log("Step 1: Registering health check endpoints...");
    
    // Health check endpoint for Autoscale Deployments
    // Must be registered BEFORE other routes to ensure it responds quickly
    app.get("/health", (_req, res) => {
      res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
    });

    // Root health check - Autoscale sends health checks to '/' by default
    // Use HEAD method for health checks to avoid interfering with the homepage
    app.head("/", (_req, res) => {
      res.status(200).end();
    });
    
    console.log("Step 2: Health check endpoints registered");
    console.log("Step 3: Registering API routes...");

    const server = await registerRoutes(app);
    
    console.log("Step 4: API routes registered successfully");

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      
      console.error("Express error handler caught:", err);
      res.status(status).json({ message });
    });

    console.log("Step 5: Setting up frontend...");
    console.log("Environment mode:", app.get("env"));
    
    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      console.log("Development mode: Setting up Vite...");
      await setupVite(app, server);
      console.log("Vite setup complete");
    } else {
      console.log("Production mode: Serving static files...");
      serveStatic(app);
      console.log("Static file serving configured");
    }

    // ALWAYS serve the app on the port specified in the environment variable PORT
    // Other ports are firewalled. Default to 5000 if not specified.
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || '5000', 10);
    
    console.log(`Step 6: Starting server on ${port}...`);
    
    await new Promise<void>((resolve, reject) => {
      const serverInstance = server.listen({
        port,
        host: "0.0.0.0",
        reusePort: true,
      }, () => {
        log(`serving on port ${port}`);
        console.log("=== Server started successfully ===");
        console.log(`Server is listening on http://0.0.0.0:${port}`);
        console.log("Health check endpoints:");
        console.log("  - HEAD /");
        console.log("  - GET /health");
        console.log("Server is running and ready to accept connections");
        console.log("Process will stay alive to handle requests...");
        resolve();
      });
      
      serverInstance.on('error', (err) => {
        console.error("Server listen error:", err);
        reject(err);
      });
    });
    
    // Keep the process alive - the server is now listening
    // Don't exit the async function, just wait indefinitely
    console.log("Main initialization complete. Server is now handling requests.");
    
    // Set up graceful shutdown handlers
    process.on('SIGTERM', () => {
      console.log('SIGTERM received, shutting down gracefully...');
      process.exit(0);
    });
    
    process.on('SIGINT', () => {
      console.log('SIGINT received, shutting down gracefully...');
      process.exit(0);
    });
    
  } catch (err) {
    console.error("=== FATAL ERROR during server startup ===");
    console.error("Error details:", err);
    console.error("Stack trace:", err instanceof Error ? err.stack : "No stack trace");
    process.exit(1);
  }
})();
