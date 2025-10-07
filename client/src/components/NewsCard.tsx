import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
}

export function NewsCard({ title, excerpt, date, author, image }: NewsCardProps) {
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
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <button 
          className="text-primary font-medium hover:underline"
          data-testid={`button-read-more-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}
        >
          Read more →
        </button>
      </CardContent>
    </Card>
  );
}
