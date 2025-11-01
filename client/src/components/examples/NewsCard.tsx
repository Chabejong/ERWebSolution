import { NewsCard } from '../NewsCard';
import newsImage from '@assets/generated_images/Business_team_collaboration_0246ba0f.png';

export default function NewsCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      <NewsCard
        title="E&R Webservice Launches New Cloud Infrastructure"
        excerpt="We're excited to announce the launch of our next-generation cloud hosting platform..."
        content="We're excited to announce the launch of our next-generation cloud hosting platform. This new infrastructure provides enhanced performance, reliability, and scalability for all our clients. With state-of-the-art data centers and advanced security measures, we're committed to delivering the best hosting experience possible. Our cloud platform features automatic scaling, 99.9% uptime guarantee, and enterprise-grade security protocols."
        date="Oct 7, 2025"
        author="Marketing Team"
        image={newsImage}
      />
      <NewsCard
        title="Partnership with Leading Tech Companies"
        excerpt="E&R Webservice announces strategic partnerships to enhance service delivery..."
        content="E&R Webservice announces strategic partnerships to enhance service delivery and expand our technological capabilities. These partnerships will enable us to offer cutting-edge solutions and better serve our growing client base. We're collaborating with industry leaders to bring innovative tools and services that will help businesses succeed in the digital age. Our partners include major cloud providers, security firms, and development platforms."
        date="Oct 5, 2025"
        author="PR Department"
        image={newsImage}
      />
    </div>
  );
}
