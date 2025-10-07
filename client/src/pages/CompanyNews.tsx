import { Navigation } from '@/components/Navigation';
import { NewsCard } from '@/components/NewsCard';
import { Footer } from '@/components/Footer';
import { useQuery } from '@tanstack/react-query';
import type { NewsArticle } from '@shared/schema';
import newsImage1 from '@assets/stock_images/multiracial_tech_tea_9888b301.jpg';
import newsImage2 from '@assets/stock_images/diverse_business_tea_115ecd84.jpg';
import heroImage from '@assets/Lucid_Origin_A_futuristic_laptop_on_a_desk_with_a_beautiful_we_0_1759860120116.jpg';

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
      
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-primary/90 to-accent/90">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              News & Press
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Latest updates, announcements, and insights from E&R Webservice
            </p>
          </div>
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
