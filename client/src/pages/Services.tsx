import { Navigation } from '@/components/Navigation';
import { ServiceCard } from '@/components/ServiceCard';
import { Footer } from '@/components/Footer';
import { Code2, Globe, Server, Smartphone, ShoppingCart, Database } from 'lucide-react';
import heroImage from '@assets/Lucid_Origin_A_futuristic_laptop_on_a_desk_with_a_beautiful_we_0_1759860120116.jpg';

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">E&R WebSolution</h2>
        </div>
      </div>

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
            fullDescription="Custom web applications built with modern technologies and cutting-edge frameworks. We specialize in creating intuitive, scalable, and high-performance web applications tailored to your business needs. Our design process focuses on user experience, accessibility, and seamless functionality across all platforms. From single-page applications to complex enterprise solutions, we deliver web apps that drive engagement and deliver measurable results."
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
            fullDescription="Professional websites that deliver results and exceed expectations. We build stunning, conversion-focused websites that represent your brand and engage your audience. Our development approach combines beautiful design with robust functionality, ensuring your website not only looks great but performs exceptionally. Whether you need a corporate website, landing page, or complex web portal, we create solutions that help your business grow online."
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
            fullDescription="Reliable infrastructure for your applications with enterprise-grade hosting solutions. Our hosting services provide the foundation your digital presence needs to thrive. We offer high-performance servers, robust security measures, and comprehensive support to keep your applications running smoothly 24/7. From shared hosting to dedicated servers and cloud solutions, we ensure your websites and applications are always fast, secure, and accessible to your users worldwide."
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
            fullDescription="Custom database solutions designed for your specific needs and built to scale. We architect and implement robust database systems that power your applications efficiently and securely. Our expertise spans relational databases, NoSQL solutions, and data warehousing. From initial design to migration and ongoing optimization, we ensure your data infrastructure supports your business goals while maintaining performance, reliability, and security at every level."
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
            fullDescription="Native and cross-platform mobile applications that deliver exceptional user experiences. We create powerful mobile apps that engage users and drive business growth. Whether you need iOS, Android, or cross-platform solutions, our development team brings your mobile vision to life with intuitive interfaces and robust functionality. From concept to app store deployment and beyond, we handle every aspect of mobile development."
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
            fullDescription="Complete online store solutions that drive sales and customer satisfaction. We build powerful e-commerce platforms that make it easy for your customers to shop and for you to manage your business. Our solutions integrate payment processing, inventory management, shipping, and analytics into one seamless system. Whether you're launching a new store or upgrading an existing one, we create e-commerce experiences that convert visitors into loyal customers."
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
