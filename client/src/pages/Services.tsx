import { Navigation } from '@/components/Navigation';
import { ServiceCard } from '@/components/ServiceCard';
import { Footer } from '@/components/Footer';
import { Code2, Globe, Server, Smartphone, ShoppingCart, Database } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
          <p className="text-lg text-muted-foreground">
            Our three main service areas provide everything you need for your digital success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ServiceCard
            icon={Code2}
            title="Web App Design"
            description="Custom web applications built with modern technologies"
            features={[
              'User-centric design approach',
              'Modern UI/UX principles',
              'Responsive across all devices',
              'Performance optimized',
              'Progressive web apps',
              'Real-time functionality'
            ]}
          />
          <ServiceCard
            icon={Globe}
            title="Website Development"
            description="Professional websites that deliver results"
            features={[
              'SEO-friendly architecture',
              'Content management systems',
              'E-commerce solutions',
              'Ongoing maintenance',
              'Analytics integration',
              'Security best practices'
            ]}
          />
          <ServiceCard
            icon={Server}
            title="Hosting Services"
            description="Reliable infrastructure for your applications"
            features={[
              '99.9% uptime guarantee',
              'Daily backups',
              'SSL certificates included',
              '24/7 technical support',
              'Scalable resources',
              'Performance monitoring'
            ]}
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Solutions</h2>
          <p className="text-lg text-muted-foreground">
            Additional services to meet specific business requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Database}
            title="Building of Databases"
            description="Custom database solutions designed for your specific needs"
            features={[
              'Database architecture design',
              'Custom schema development',
              'Data modeling and optimization',
              'Migration and integration services'
            ]}
          />
          <ServiceCard
            icon={Smartphone}
            title="Mobile Development"
            description="Native and cross-platform mobile applications"
            features={[
              'iOS and Android apps',
              'React Native development',
              'App store optimization',
              'Push notifications'
            ]}
          />
          <ServiceCard
            icon={ShoppingCart}
            title="E-Commerce Solutions"
            description="Complete online store solutions"
            features={[
              'Payment gateway integration',
              'Inventory management',
              'Order processing',
              'Customer analytics'
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
