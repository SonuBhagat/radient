import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'; 
import { NavLink } from '../types';

const navigation: NavLink[] = [
  { title: 'Home', path: '/' },
  {
    title: 'Services',
    path: '',
    subLinks: [
      { title: 'Power Solutions', path: '/services/power-solutions' },
      { title: 'Solar EPC Solutions', path: '/services/solar-epc' },
      { title: 'Electrical EPC Solutions', path: '/services/electrical-epc' },
      { title: 'Energy Efficient Lighting', path: '/services/energy-lighting' },
    ],
  },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  let hideTimeout: NodeJS.Timeout;

  const handleMouseEnter = (title: string) => {
    clearTimeout(hideTimeout); 
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); 
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Radient Power"
                style={{ height: '60px', width: 'auto' }}
              />
            </a>
          </div>

          {/* Desktop Menu Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.path}
                  onClick={(e) => {
                    if (item.subLinks) e.preventDefault(); 
                  }}
                  className={`flex items-center text-gray-600 hover:text-blue-950 px-3 py-2 text-sm font-medium ${
                    item.subLinks ? 'cursor-default' : ''
                  }`}
                >
                  {item.title}
                  {item.subLinks && (
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                  )}
                </a>
                {item.subLinks && activeDropdown === item.title && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.subLinks.map((subLink) => (
                        <a
                          key={subLink.title}
                          href={subLink.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subLink.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.title}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    if (item.subLinks) e.preventDefault(); 
                  }}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.title}
                  {item.subLinks && (
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                  )}
                </a>
                {item.subLinks && (
                  <div className="pl-4">
                    {item.subLinks.map((subLink) => (
                      <a
                        key={subLink.title}
                        href={subLink.path}
                        className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {subLink.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
