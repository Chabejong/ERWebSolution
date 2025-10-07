import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link?: string;
}

export function PortfolioCard({ image, title, category, description, link }: PortfolioCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            className="bg-white text-foreground px-6 py-2 rounded-lg flex items-center gap-2 hover-elevate"
            data-testid={`button-view-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            View Project
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
      <CardContent className="p-6">
        <Badge className="mb-3" data-testid={`badge-${category.toLowerCase()}`}>{category}</Badge>
        <h3 className="text-xl font-semibold mb-2" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
