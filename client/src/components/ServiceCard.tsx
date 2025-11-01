import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  fullDescription?: string;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, features, fullDescription, href }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasExpandableContent = fullDescription && fullDescription.length > description.length;

  return (
    <Card className="flex flex-col h-full hover-elevate transition-all duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">
          {isExpanded && fullDescription ? fullDescription : description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      {hasExpandableContent && (
        <CardFooter>
          <Button 
            variant="ghost" 
            className="group hover-elevate" 
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {isExpanded ? (
              <>
                Show Less
                <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
