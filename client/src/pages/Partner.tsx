import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Target, Zap } from 'lucide-react';
import heroImage from '@assets/Lucid_Origin_A_futuristic_laptop_on_a_desk_with_a_beautiful_we_2_1759860120116.jpg';
import gasaLogo from '@assets/stock_images/professional_media_c_fc25f84d.jpg';
import mvoiceLogo from '@assets/stock_images/voice_communication__171084ca.jpg';
import aandmLogo from '@assets/stock_images/business_company_log_6c1ddc5e.jpg';

export default function Partner() {
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
              Our Partners
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver exceptional solutions
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Strategic Partnerships
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            We partner with leading technology providers to ensure the best solutions for our clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { name: 'GASA MEDIA', url: 'https://gasamedia.net', testId: 'partner-logo-gasamedia', image: gasaLogo },
            { name: 'M-Voice', url: 'https://m-voice.replit.app', testId: 'partner-logo-mvoice', image: mvoiceLogo },
            { name: 'A&M', url: 'https://aandm.replit.app', testId: 'partner-logo-aandm', image: aandmLogo },
          ].map((partner) => (
            <a
              key={partner.url}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center hover-elevate transition-all overflow-hidden"
              data-testid={partner.testId}
            >
              <img 
                src={partner.image} 
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </a>
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
