import { FeatureSection } from '../FeatureSection';
import devImage from '@assets/generated_images/Web_development_workspace_b730583d.png';

export default function FeatureSectionExample() {
  return (
    <div className="p-8">
      <FeatureSection
        image={devImage}
        title="Expert Development Team"
        description="Our experienced developers use cutting-edge technologies to build scalable, maintainable web solutions"
        features={[
          'Full-stack development expertise',
          'Agile development methodology',
          'Code quality and testing standards',
          'Regular updates and communication'
        ]}
        imageOnLeft={true}
      />
    </div>
  );
}
