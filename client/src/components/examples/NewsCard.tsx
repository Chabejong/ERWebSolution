import { NewsCard } from '../NewsCard';
import newsImage from '@assets/generated_images/Business_team_collaboration_0246ba0f.png';

export default function NewsCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      <NewsCard
        title="E&R Webservice Launches New Cloud Infrastructure"
        excerpt="We're excited to announce the launch of our next-generation cloud hosting platform..."
        date="Oct 7, 2025"
        author="Marketing Team"
        image={newsImage}
      />
      <NewsCard
        title="Partnership with Leading Tech Companies"
        excerpt="E&R Webservice announces strategic partnerships to enhance service delivery..."
        date="Oct 5, 2025"
        author="PR Department"
        image={newsImage}
      />
    </div>
  );
}
