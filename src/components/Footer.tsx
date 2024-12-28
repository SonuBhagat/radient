// import React from 'react';
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <Zap className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Radient Power</span> */}
              <img
                src="/logo.png"
                alt="Radient Power"
                style={{ height: "60px", width: "auto" }}
              />
            </div>
            <p className="text-gray-400">Smart Energy, Sustainable Living</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/power-solutions"
                  className="text-gray-400 hover:text-white"
                >
                  Power Solutions
                </a>
              </li>
              <li>
                <a
                  href="/services/solar-epc"
                  className="text-gray-400 hover:text-white"
                >
                  Solar EPC Solutions
                </a>
              </li>
              <li>
                <a
                  href="/services/electrical-epc"
                  className="text-gray-400 hover:text-white"
                >
                  Electrical EPC Solutions
                </a>
              </li>
              <li>
                <a
                  href="/services/energy-lighting"
                  className="text-gray-400 hover:text-white"
                >
                  Energy Efficient Lighting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">
                  A4/55 Golf Link Apartment, Dwarka Sector 21, New Delhi, 110075
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">+91 93456 74890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">info@radientpower.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Radient Power. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
