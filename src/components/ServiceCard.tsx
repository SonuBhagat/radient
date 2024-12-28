// import React from 'react';
import { ArrowRight } from "lucide-react";
import type { ServiceCard as ServiceCardType } from "../types";

export default function ServiceCard({
  title,
  description,
  icon,
  link,
}: ServiceCardType) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
      <div className="text-green-600 mb-4">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-green-600 hover:text-green-700"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}
