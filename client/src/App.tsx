import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Reference from "@/pages/Reference";
import Partner from "@/pages/Partner";
import Contact from "@/pages/Contact";
import CompanyAbout from "@/pages/CompanyAbout";
import CompanyHistory from "@/pages/CompanyHistory";
import CompanyNews from "@/pages/CompanyNews";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/reference" component={Reference} />
      <Route path="/partner" component={Partner} />
      <Route path="/contact" component={Contact} />
      <Route path="/company/about" component={CompanyAbout} />
      <Route path="/company/history" component={CompanyHistory} />
      <Route path="/company/news" component={CompanyNews} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
