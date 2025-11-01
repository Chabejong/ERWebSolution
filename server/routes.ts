import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import bcrypt from "bcryptjs";
import { storage } from "./storage";
import { insertNewsArticleSchema, insertPortfolioProjectSchema, insertContactSubmissionSchema } from "@shared/schema";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "erwebservice@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "news_2025";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session?.isAuthenticated) {
    return next();
  }
  res.status(401).json({ error: "Authentication required" });
};

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
      }

      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.isAuthenticated = true;
        req.session.userId = "admin";
        return res.json({ success: true, message: "Login successful" });
      }

      res.status(401).json({ error: "Invalid credentials" });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Logout failed" });
      }
      res.json({ success: true, message: "Logout successful" });
    });
  });

  app.get("/api/auth/status", (req, res) => {
    res.json({ 
      isAuthenticated: !!req.session?.isAuthenticated,
      userId: req.session?.userId 
    });
  });

  app.get("/api/news", async (_req, res) => {
    try {
      const articles = await storage.getAllNewsArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch news articles" });
    }
  });

  app.get("/api/news/:id", async (req, res) => {
    try {
      const article = await storage.getNewsArticle(req.params.id);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });

  app.post("/api/news", requireAuth, async (req, res) => {
    try {
      const validatedData = insertNewsArticleSchema.parse(req.body);
      const article = await storage.createNewsArticle(validatedData);
      res.status(201).json(article);
    } catch (error) {
      res.status(400).json({ error: "Invalid article data" });
    }
  });

  app.patch("/api/news/:id", requireAuth, async (req, res) => {
    try {
      const validatedData = insertNewsArticleSchema.partial().parse(req.body);
      const article = await storage.updateNewsArticle(req.params.id, validatedData);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ error: "Invalid article data" });
      }
      res.status(500).json({ error: "Failed to update article" });
    }
  });

  app.delete("/api/news/:id", requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteNewsArticle(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete article" });
    }
  });

  app.get("/api/portfolio", async (_req, res) => {
    try {
      const projects = await storage.getAllPortfolioProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio projects" });
    }
  });

  app.get("/api/portfolio/:id", async (req, res) => {
    try {
      const project = await storage.getPortfolioProject(req.params.id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  app.post("/api/portfolio", requireAuth, async (req, res) => {
    try {
      const validatedData = insertPortfolioProjectSchema.parse(req.body);
      const project = await storage.createPortfolioProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ error: "Invalid project data" });
    }
  });

  app.patch("/api/portfolio/:id", requireAuth, async (req, res) => {
    try {
      const validatedData = insertPortfolioProjectSchema.partial().parse(req.body);
      const project = await storage.updatePortfolioProject(req.params.id, validatedData);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ error: "Invalid project data" });
      }
      res.status(500).json({ error: "Failed to update project" });
    }
  });

  app.delete("/api/portfolio/:id", requireAuth, async (req, res) => {
    try {
      const success = await storage.deletePortfolioProject(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json(submission);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  app.get("/api/contact", requireAuth, async (_req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
