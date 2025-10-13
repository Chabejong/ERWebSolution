import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@assets/Lucid_Origin_Modern_web_design_concept_A_minimalistic_tablet_s_1_1759860120116.jpg';

export default function CompanyHistory() {
  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'E&R Webservice was established with a vision to provide quality web solutions to small businesses'
    },
    {
      year: '2012',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, marking a significant milestone in company growth'
    },
    {
      year: '2015',
      title: 'Expanded Services',
      description: 'Launched hosting services division, providing comprehensive solutions under one roof'
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Opened offices in Europe and Asia, serving clients across three continents'
    },
    {
      year: '2021',
      title: 'Cloud Innovation',
      description: 'Launched next-generation cloud infrastructure with advanced security features'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as one of the top web development companies, serving 500+ active clients'
    }
  ];

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
              Our History
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              A journey of innovation, growth, and success
            </p>
          </div>
        </div>
      </section>

      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">E&R WebSolution</h2>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="md:pl-20">
                  <div className="absolute left-4 md:left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  <Card className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary mb-2" data-testid={`text-year-${milestone.year}`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Journey Continues
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As we look to the future, we remain committed to innovation, excellence, 
            and helping our clients succeed in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
