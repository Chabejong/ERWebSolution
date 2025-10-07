import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Award } from 'lucide-react';
import teamImage from '@assets/generated_images/Business_team_collaboration_0246ba0f.png';

export default function CompanyAbout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About E&R Webservice
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering excellence in web development since 2009
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in 2009, E&R Webservice has grown from a small startup to a leading provider 
              of web development and hosting solutions. Our journey began with a simple mission: 
              to help businesses succeed in the digital world.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we serve hundreds of clients across various industries, from small businesses 
              to large enterprises. Our commitment to quality, innovation, and customer satisfaction 
              remains at the core of everything we do.
            </p>
          </div>
          <div>
            <img
              src={teamImage}
              alt="Our team"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower businesses with cutting-edge web solutions that drive growth, 
                enhance user experience, and deliver measurable results.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the most trusted partner for businesses seeking digital transformation, 
                recognized for our innovation, reliability, and exceptional service.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Excellence, integrity, innovation, and customer-centricity guide our decisions 
                and shape our culture every day.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Our diverse team of experts brings together years of experience in design, 
            development, and technology
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
