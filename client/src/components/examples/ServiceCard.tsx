import { ServiceCard } from '../ServiceCard';
import { Code2, Globe, Server } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
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
    </div>
  );
}
