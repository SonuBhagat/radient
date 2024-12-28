// import React from 'react';
import Hero from "./Hero";

interface ServiceHeroProps {
  service: string;
  description: string;
  image: string;
}

export default function ServiceHero({
  service,
  description,
  image,
}: ServiceHeroProps) {
  return <Hero title={service} subtitle={description} image={image} />;
}
