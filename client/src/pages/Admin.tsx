import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LoginForm } from '@/components/LoginForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { queryClient } from '@/lib/queryClient';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { 
  insertNewsArticleSchema, 
  insertPortfolioProjectSchema,
  type NewsArticle,
  type PortfolioProject 
} from '@shared/schema';
import { Pencil, Trash2, LogOut } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type NewsFormData = typeof insertNewsArticleSchema._type;
type PortfolioFormData = typeof insertPortfolioProjectSchema._type;

export default function Admin() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [editingNews, setEditingNews] = useState<NewsArticle | null>(null);
  const [editingPortfolio, setEditingPortfolio] = useState<PortfolioProject | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ type: 'news' | 'portfolio'; id: string } | null>(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/status');
      const data = await response.json();
      setIsAuthenticated(data.isAuthenticated);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      toast({ title: 'Logged out successfully' });
    } catch (error) {
      toast({ 
        title: 'Logout failed', 
        description: 'An error occurred',
        variant: 'destructive'
      });
    }
  };

  const { data: newsArticles = [] } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news'],
    enabled: isAuthenticated === true,
  });

  const { data: portfolioProjects = [] } = useQuery<PortfolioProject[]>({
    queryKey: ['/api/portfolio'],
    enabled: isAuthenticated === true,
  });

  const { data: contactSubmissions = [] } = useQuery<any[]>({
    queryKey: ['/api/contact'],
    enabled: isAuthenticated === true,
  });

  const newsForm = useForm<NewsFormData>({
    resolver: zodResolver(insertNewsArticleSchema),
    defaultValues: {
      title: '',
      excerpt: '',
      content: '',
      author: '',
      image: '',
    },
  });

  const portfolioForm = useForm<PortfolioFormData>({
    resolver: zodResolver(insertPortfolioProjectSchema),
    defaultValues: {
      title: '',
      category: '',
      description: '',
      image: '',
      link: '',
    },
  });

  const createNewsMutation = useMutation({
    mutationFn: async (data: NewsFormData) => {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create article');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/news'] });
      toast({ title: 'News article created successfully' });
      newsForm.reset();
    },
  });

  const updateNewsMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<NewsFormData> }) => {
      const response = await fetch(`/api/news/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update article');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/news'] });
      toast({ title: 'News article updated successfully' });
      setEditingNews(null);
      newsForm.reset();
    },
  });

  const deleteNewsMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/news/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete article');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/news'] });
      toast({ title: 'News article deleted successfully' });
      setDeleteConfirm(null);
    },
  });

  const createPortfolioMutation = useMutation({
    mutationFn: async (data: PortfolioFormData) => {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create project');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolio'] });
      toast({ title: 'Portfolio project created successfully' });
      portfolioForm.reset();
    },
  });

  const updatePortfolioMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<PortfolioFormData> }) => {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update project');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolio'] });
      toast({ title: 'Portfolio project updated successfully' });
      setEditingPortfolio(null);
      portfolioForm.reset();
    },
  });

  const deletePortfolioMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete project');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolio'] });
      toast({ title: 'Portfolio project deleted successfully' });
      setDeleteConfirm(null);
    },
  });

  const handleNewsEdit = (article: NewsArticle) => {
    setEditingNews(article);
    newsForm.reset({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      author: article.author,
      image: article.image || '',
    });
  };

  const handlePortfolioEdit = (project: PortfolioProject) => {
    setEditingPortfolio(project);
    portfolioForm.reset({
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.image,
      link: project.link || '',
    });
  };

  const onNewsSubmit = (data: NewsFormData) => {
    if (editingNews) {
      updateNewsMutation.mutate({ id: editingNews.id, data });
    } else {
      createNewsMutation.mutate(data);
    }
  };

  const onPortfolioSubmit = (data: PortfolioFormData) => {
    if (editingPortfolio) {
      updatePortfolioMutation.mutate({ id: editingPortfolio.id, data });
    } else {
      createPortfolioMutation.mutate(data);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Admin Dashboard
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Please log in to access the admin dashboard
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <LoginForm onLoginSuccess={() => setIsAuthenticated(true)} />
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Admin Dashboard
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Manage news articles, portfolio projects, and view contact submissions
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="hover-elevate"
              data-testid="button-logout"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="news">News Articles</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{editingNews ? 'Edit' : 'Create'} News Article</CardTitle>
                  <CardDescription>
                    {editingNews ? 'Update the news article' : 'Add a new article to the news page'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...newsForm}>
                    <form onSubmit={newsForm.handleSubmit(onNewsSubmit)} className="space-y-4">
                      <FormField
                        control={newsForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-news-title" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={newsForm.control}
                        name="excerpt"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Excerpt</FormLabel>
                            <FormControl>
                              <Textarea {...field} data-testid="input-news-excerpt" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={newsForm.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                              <Textarea {...field} className="min-h-[120px]" data-testid="input-news-content" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={newsForm.control}
                        name="author"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Author</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-news-author" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={newsForm.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL (optional)</FormLabel>
                            <FormControl>
                              <Input {...field} value={field.value || ''} data-testid="input-news-image" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-2">
                        <Button type="submit" className="hover-elevate" data-testid="button-submit-news">
                          {editingNews ? 'Update' : 'Create'} Article
                        </Button>
                        {editingNews && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => {
                              setEditingNews(null);
                              newsForm.reset();
                            }}
                            className="hover-elevate"
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Existing Articles</h3>
                </div>
                {newsArticles.map((article) => (
                  <Card key={article.id} className="hover-elevate">
                    <CardHeader>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription>{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleNewsEdit(article)}
                          className="hover-elevate"
                          data-testid={`button-edit-news-${article.id}`}
                        >
                          <Pencil className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => setDeleteConfirm({ type: 'news', id: article.id })}
                          className="hover-elevate"
                          data-testid={`button-delete-news-${article.id}`}
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{editingPortfolio ? 'Edit' : 'Create'} Portfolio Project</CardTitle>
                  <CardDescription>
                    {editingPortfolio ? 'Update the portfolio project' : 'Add a new project to the portfolio'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...portfolioForm}>
                    <form onSubmit={portfolioForm.handleSubmit(onPortfolioSubmit)} className="space-y-4">
                      <FormField
                        control={portfolioForm.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-portfolio-title" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={portfolioForm.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-portfolio-category" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={portfolioForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea {...field} data-testid="input-portfolio-description" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={portfolioForm.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-portfolio-image" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={portfolioForm.control}
                        name="link"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Link (optional)</FormLabel>
                            <FormControl>
                              <Input {...field} value={field.value || ''} data-testid="input-portfolio-link" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-2">
                        <Button type="submit" className="hover-elevate" data-testid="button-submit-portfolio">
                          {editingPortfolio ? 'Update' : 'Create'} Project
                        </Button>
                        {editingPortfolio && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => {
                              setEditingPortfolio(null);
                              portfolioForm.reset();
                            }}
                            className="hover-elevate"
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Existing Projects</h3>
                </div>
                {portfolioProjects.map((project) => (
                  <Card key={project.id} className="hover-elevate">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription>{project.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handlePortfolioEdit(project)}
                          className="hover-elevate"
                          data-testid={`button-edit-portfolio-${project.id}`}
                        >
                          <Pencil className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => setDeleteConfirm({ type: 'portfolio', id: project.id })}
                          className="hover-elevate"
                          data-testid={`button-delete-portfolio-${project.id}`}
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Submissions</h3>
              {contactSubmissions.map((submission: any) => (
                <Card key={submission.id} className="hover-elevate">
                  <CardHeader>
                    <CardTitle className="text-lg">{submission.name} - {submission.company}</CardTitle>
                    <CardDescription>{submission.email}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">{submission.message}</p>
                    <p className="text-xs text-muted-foreground">
                      Submitted: {new Date(submission.createdAt).toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
              {contactSubmissions.length === 0 && (
                <p className="text-center text-muted-foreground">No contact submissions yet</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the {deleteConfirm?.type}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (deleteConfirm?.type === 'news') {
                  deleteNewsMutation.mutate(deleteConfirm.id);
                } else if (deleteConfirm?.type === 'portfolio') {
                  deletePortfolioMutation.mutate(deleteConfirm.id);
                }
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
}
