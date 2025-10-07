import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Target, Zap } from 'lucide-react';

export default function Partner() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Partners
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional solutions
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Strategic Partnerships
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            We partner with leading technology providers to ensure the best solutions for our clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center hover-elevate transition-all"
              data-testid={`partner-logo-${i}`}
            >
              <span className="text-muted-foreground font-medium">Partner Logo {i}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Technology Partners</CardTitle>
              <CardDescription>
                Collaborating with leading cloud providers and software vendors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cloud infrastructure providers</li>
                <li>• Development framework vendors</li>
                <li>• Security solution partners</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Reseller Partners</CardTitle>
              <CardDescription>
                Expanding our reach through trusted reseller relationships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Regional service providers</li>
                <li>• Industry-specific consultants</li>
                <li>• System integrators</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Innovation Partners</CardTitle>
              <CardDescription>
                Working with startups and innovators on cutting-edge solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• AI and ML technology providers</li>
                <li>• IoT solution developers</li>
                <li>• Blockchain platforms</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our partner ecosystem and grow your business with E&R Webservice
          </p>
          <button 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover-elevate transition-all"
            data-testid="button-partner-inquiry"
          >
            Partner Inquiry
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
