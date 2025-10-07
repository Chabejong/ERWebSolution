import { Navigation } from '@/components/Navigation';
import { PortfolioCard } from '@/components/PortfolioCard';
import { Footer } from '@/components/Footer';
import { useQuery } from '@tanstack/react-query';
import type { PortfolioProject } from '@shared/schema';
import projectImage1 from '@assets/stock_images/monochrome_developer_f793ec4a.jpg';
import projectImage2 from '@assets/stock_images/abstract_web_interfa_ee660948.jpg';
import projectImage3 from '@assets/generated_images/Cloud_hosting_technology_concept_568859e4.png';
import heroImage from '@assets/Lucid_Origin_A_futuristic_laptop_on_a_desk_with_a_beautiful_we_1_1759860120116.jpg';

export default function Reference() {
  const { data: portfolioProjects = [], isLoading } = useQuery<PortfolioProject[]>({
    queryKey: ['/api/portfolio'],
  });

  const getImageForProject = (image: string) => {
    if (image.startsWith('http')) return image;
    const images = [projectImage1, projectImage2, projectImage3];
    return images[Math.floor(Math.random() * images.length)];
  };

  const mockProjects = [
    {
      image: projectImage1,
      title: 'Global E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution handling millions of transactions annually'
    },
    {
      image: projectImage2,
      title: 'Financial Services Portal',
      category: 'Web App Design',
      description: 'Secure banking application with real-time transaction processing'
    },
    {
      image: projectImage3,
      title: 'Enterprise Cloud Migration',
      category: 'Hosting',
      description: 'Seamless migration of legacy systems to modern cloud infrastructure'
    },
    {
      image: projectImage1,
      title: 'Healthcare Management System',
      category: 'Web Development',
      description: 'HIPAA-compliant patient management and scheduling platform'
    },
    {
      image: projectImage2,
      title: 'Educational Learning Platform',
      category: 'Web App Design',
      description: 'Interactive online learning environment with video streaming'
    },
    {
      image: projectImage3,
      title: 'Manufacturing ERP Solution',
      category: 'Web Development',
      description: 'Custom ERP system for inventory and production management'
    }
  ];
  
  const projects = portfolioProjects.length > 0 
    ? portfolioProjects.map(p => ({
        image: getImageForProject(p.image),
        title: p.title,
        category: p.category,
        description: p.description,
        link: p.link
      }))
    : mockProjects;

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
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Showcasing successful projects across various industries
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading portfolio projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We've helped businesses of all sizes achieve their digital goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
