interface FeatureSectionProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  imageOnLeft?: boolean;
}

export function FeatureSection({ image, title, description, features, imageOnLeft = true }: FeatureSectionProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!imageOnLeft ? 'lg:flex-row-reverse' : ''}`}>
      <div className={imageOnLeft ? 'lg:order-1' : 'lg:order-2'}>
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>
      <div className={imageOnLeft ? 'lg:order-2' : 'lg:order-1'}>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
