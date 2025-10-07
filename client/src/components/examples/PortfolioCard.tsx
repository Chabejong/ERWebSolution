import { PortfolioCard } from '../PortfolioCard';
import projectImage from '@assets/generated_images/Web_development_workspace_b730583d.png';

export default function PortfolioCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      <PortfolioCard
        image={projectImage}
        title="E-Commerce Platform"
        category="Web Development"
        description="Modern e-commerce solution with integrated payment processing"
      />
      <PortfolioCard
        image={projectImage}
        title="Corporate Website"
        category="Design"
        description="Professional corporate website with CMS integration"
      />
      <PortfolioCard
        image={projectImage}
        title="Cloud Infrastructure"
        category="Hosting"
        description="Scalable cloud hosting solution for enterprise clients"
      />
    </div>
  );
}
