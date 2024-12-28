// import React from 'react';
// import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink,
}: HeroProps) {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {/* {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        )} */}
      </div>
    </div>
  );
}
