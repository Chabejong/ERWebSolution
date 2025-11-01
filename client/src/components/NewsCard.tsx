import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ChevronDown, ChevronUp } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
}

export function NewsCard({ title, excerpt, content, date, author, image }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2" data-testid={`text-news-title-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}>{title}</h3>
        
        <div className="text-muted-foreground mb-4">
          {isExpanded ? (
            <div className="whitespace-pre-line" data-testid="text-news-content-full">{content}</div>
          ) : (
            <p data-testid="text-news-content-excerpt">{excerpt}</p>
          )}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary font-medium hover:underline flex items-center gap-1"
          data-testid={`button-read-more-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}
        >
          {isExpanded ? (
            <>
              Show less {<ChevronUp className="h-4 w-4" />}
            </>
          ) : (
            <>
              Read more {<ChevronDown className="h-4 w-4" />}
            </>
          )}
        </button>
      </CardContent>
    </Card>
  );
}
