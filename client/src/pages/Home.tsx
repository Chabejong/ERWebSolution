import { Navigation } from '@/components/Navigation';
import { HeroCarousel } from '@/components/HeroCarousel';
import { ServiceCard } from '@/components/ServiceCard';
import { FeatureSection } from '@/components/FeatureSection';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code2, Globe, Server, Database } from 'lucide-react';
import heroImage1 from '@assets/stock_images/abstract_web_interfa_4f2b9d59.jpg';
import heroImage2 from '@assets/stock_images/laptop_screen_with_c_d8dc6b75.jpg';
import heroImage3 from '@assets/generated_images/Data_center_technology_infrastructure_5648b83b.png';
import devImage from '@assets/stock_images/modern_web_developme_0031916a.jpg';
import designImage from '@assets/stock_images/abstract_web_interfa_57d8a322.jpg';
import hostingImage from '@assets/generated_images/Cloud_hosting_technology_concept_568859e4.png';

export default function Home() {
  const slides = [
    {
      image: heroImage1,
      title: 'Professional Web Solutions for Your Business',
      description: 'Transform your digital presence with our expert web development and hosting services'
    },
    {
      image: heroImage2,
      title: 'Trusted by Businesses Worldwide',
      description: 'Join hundreds of satisfied clients who trust E&R Webservice for their digital needs'
    },
    {
      image: heroImage3,
      title: 'Reliable Hosting Infrastructure',
      description: 'Enterprise-grade hosting solutions with 99.9% uptime guarantee'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <HeroCarousel slides={slides} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive Web Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From design to deployment, we provide end-to-end solutions for your digital needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={Code2}
            title="Web App Design"
            description="Custom web applications tailored to your business needs"
            features={[
              'User-centric design approach',
              'Modern UI/UX principles',
              'Responsive across all devices',
              'Performance optimized'
            ]}
          />
          <ServiceCard
            icon={Globe}
            title="Website Development"
            description="Professional websites that drive results"
            features={[
              'SEO-friendly architecture',
              'Content management systems',
              'E-commerce solutions',
              'Ongoing maintenance'
            ]}
          />
          <ServiceCard
            icon={Server}
            title="Hosting Services"
            description="Reliable and secure hosting infrastructure"
            features={[
              '99.9% uptime guarantee',
              'Daily backups',
              'SSL certificates included',
              '24/7 technical support'
            ]}
          />
          <ServiceCard
            icon={Database}
            title="Building of Databases"
            description="Custom database solutions for your business"
            features={[
              'Database architecture design',
              'Data modeling',
              'Performance optimization',
              'Migration services'
            ]}
          />
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <FeatureSection
            image={devImage}
            title="Expert Development Team"
            description="Our experienced developers use cutting-edge technologies to build scalable, maintainable web solutions that grow with your business"
            features={[
              'Full-stack development expertise',
              'Agile development methodology',
              'Code quality and testing standards',
              'Regular updates and communication'
            ]}
            imageOnLeft={true}
          />

          <FeatureSection
            image={designImage}
            title="Creative Design Process"
            description="We combine aesthetics with functionality to create stunning designs that engage your users and convert visitors into customers"
            features={[
              'User research and personas',
              'Wireframing and prototyping',
              'Brand consistency',
              'Accessibility-first approach'
            ]}
            imageOnLeft={false}
          />

          <FeatureSection
            image={hostingImage}
            title="Enterprise Hosting Solutions"
            description="State-of-the-art infrastructure ensures your applications run smoothly with maximum uptime and security"
            features={[
              'Cloud-based architecture',
              'Automatic scaling',
              'DDoS protection',
              'Performance monitoring'
            ]}
            imageOnLeft={true}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="hover-elevate" data-testid="button-cta-quote">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="hover-elevate" data-testid="button-cta-contact">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
