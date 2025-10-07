import { HeroCarousel } from '../HeroCarousel';
import heroImage1 from '@assets/generated_images/Corporate_office_workspace_hero_22c497b8.png';
import heroImage2 from '@assets/generated_images/Business_team_collaboration_0246ba0f.png';
import heroImage3 from '@assets/generated_images/Data_center_technology_infrastructure_5648b83b.png';

export default function HeroCarouselExample() {
  const slides = [
    {
      image: heroImage1,
      title: 'Professional Web Solutions for Your Business',
      description: 'Transform your digital presence with our expert web development and hosting services'
    },
    {
      image: heroImage2,
      title: 'Trusted by Businesses Worldwide',
      description: 'Join hundreds of satisfied clients who trust E&R Webservice for their digital needs'
    },
    {
      image: heroImage3,
      title: 'Reliable Hosting Infrastructure',
      description: 'Enterprise-grade hosting solutions with 99.9% uptime guarantee'
    }
  ];

  return <HeroCarousel slides={slides} />;
}
