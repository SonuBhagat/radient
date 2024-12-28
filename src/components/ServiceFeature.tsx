// import React from 'react';

interface ServiceFeatureProps {
  title: string;
  description: string;
  features: string[];
}

export default function ServiceFeature({
  title,
  description,
  features,
}: ServiceFeatureProps) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <span className="text-green-600">✓</span>
              </div>
              <span className="ml-3 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
