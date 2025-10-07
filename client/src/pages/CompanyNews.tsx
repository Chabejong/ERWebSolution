import { Navigation } from '@/components/Navigation';
import { NewsCard } from '@/components/NewsCard';
import { Footer } from '@/components/Footer';
import newsImage1 from '@assets/generated_images/Business_team_collaboration_0246ba0f.png';
import newsImage2 from '@assets/generated_images/Data_center_technology_infrastructure_5648b83b.png';
import newsImage3 from '@assets/generated_images/Web_development_workspace_b730583d.png';

export default function CompanyNews() {
  const newsArticles = [
    {
      title: 'E&R Webservice Launches Next-Generation Cloud Infrastructure',
      excerpt: 'We are excited to announce the launch of our cutting-edge cloud hosting platform, featuring enhanced security, improved performance, and advanced scalability options for our clients.',
      date: 'October 7, 2025',
      author: 'Marketing Team',
      image: newsImage2
    },
    {
      title: 'Strategic Partnership with Leading Tech Companies Announced',
      excerpt: 'E&R Webservice has formed strategic partnerships with industry-leading technology providers to enhance our service offerings and deliver even more value to our clients.',
      date: 'October 5, 2025',
      author: 'PR Department',
      image: newsImage1
    },
    {
      title: 'Award-Winning Team Recognized for Innovation',
      excerpt: 'Our development team has been recognized with the Innovation Excellence Award for outstanding contributions to web technology and digital transformation.',
      date: 'September 28, 2025',
      author: 'Editorial Team',
      image: newsImage3
    },
    {
      title: 'New Office Opening in San Francisco',
      excerpt: 'Expanding our presence on the West Coast, we are pleased to announce the opening of our new office in San Francisco to better serve our clients in the region.',
      date: 'September 20, 2025',
      author: 'Corporate Communications',
      image: newsImage1
    },
    {
      title: 'Webinar Series: Modern Web Development Best Practices',
      excerpt: 'Join our experts for a comprehensive webinar series covering the latest trends and best practices in modern web development, starting next month.',
      date: 'September 15, 2025',
      author: 'Education Team',
      image: newsImage3
    },
    {
      title: 'Customer Success Story: 10x Growth Achievement',
      excerpt: 'Learn how we helped a mid-sized e-commerce business achieve 10x growth through our comprehensive web development and hosting solutions.',
      date: 'September 10, 2025',
      author: 'Case Study Team',
      image: newsImage2
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
