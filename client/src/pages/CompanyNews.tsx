import { Navigation } from '@/components/Navigation';
import { NewsCard } from '@/components/NewsCard';
import { Footer } from '@/components/Footer';
import { useQuery } from '@tanstack/react-query';
import type { NewsArticle } from '@shared/schema';
import newsImage1 from '@assets/generated_images/Business_team_collaboration_0246ba0f.png';
import newsImage2 from '@assets/generated_images/Data_center_technology_infrastructure_5648b83b.png';

export default function CompanyNews() {
  const { data: newsArticles = [], isLoading } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news'],
  });

  const getImageForArticle = (image: string | null) => {
    if (image && image.startsWith('http')) return image;
    return Math.random() > 0.5 ? newsImage1 : newsImage2;
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            News & Press
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Latest updates, announcements, and insights from E&R Webservice
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading news articles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article) => (
              <NewsCard 
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                date={formatDate(article.createdAt)}
                author={article.author}
                image={getImageForArticle(article.image)}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
