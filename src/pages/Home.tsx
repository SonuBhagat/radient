import Hero from "../components/Hero";
// import ServiceCard from '../components/ServiceCard';
import type { ServiceCard as ServiceCardType } from "../types";
import ContactForm from "../components/ContactForm";

const services: ServiceCardType[] = [
  {
    title: "Power Solutions",
    description:
      "Reliable and cost-effective power solutions for businesses with Open Access and Bilateral Power arrangements.",
    icon: "/icons/power.svg",
    link: "/services/power-solutions",
  },
  {
    title: "Solar EPC Solutions",
    description:
      "End-to-end solar solutions from design to installation for sustainable energy generation.",
    icon: "/icons/solar.svg",
    link: "/services/solar-epc",
  },
  {
    title: "Electrical EPC Solutions",
    description:
      "Comprehensive electrical infrastructure solutions for industrial and commercial projects.",
    icon: "/icons/electrical.svg",
    link: "/services/electrical-epc",
  },
  {
    title: "Energy Efficient Lighting",
    description:
      "Smart lighting solutions that reduce energy consumption and operational costs.",
    icon: "/icons/lighting.svg",
    link: "/services/energy-lighting",
  },
];

export default function Home() {
  return (
    <div>
      <Hero
        title="Powering a Sustainable Future"
        subtitle="Leading provider of comprehensive energy and EPC solutions for businesses and industries"
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
        ctaText="Explore Our Services"
        ctaLink="/services"
      />

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-950">About Us</h2>
            <p className="text-gray-600 max-w-2x2 mx-auto mb-4 text-lg">
              At Radiant Power, we are dedicated to empowering a sustainable
              future through innovative energy solutions. With expertise across
              Solar EPC, Power Solutions, Electrical EPC, Energy-Efficient
              Lighting, and Energy Audits, we provide comprehensive services
              tailored to meet the unique needs of residential, commercial, and
              industrial clients.
            </p>
            <p className="text-gray-600 max-w-2x2 mx-auto text-lg">
              <b>Our mission</b> is to deliver reliable, cost-effective, and
              environmentally friendly energy solutions that drive efficiency
              and growth. Guided by a commitment to quality, innovation, and
              customer satisfaction, we partner with businesses and communities
              to create a brighter, greener tomorrow.
            </p>
          </div>
        </div>
      </section>
      {/* About Us Section Close */}

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-950">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our comprehensive range of energy solutions designed to
              power your success while promoting sustainability and efficiency.
            </p>
          </div>

          {/* Power Solutions */}
          <section className="py-16 bg-gradient-to-br from-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Power Solutions
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 text-justify">
                    Welcome to our Power Solutions page, where we provide
                    cutting-edge energy options tailored to meet the dynamic
                    needs of businesses and industries. With a focus on Open
                    Access and Bilateral Power arrangements, we ensure
                    cost-effective, reliable, and sustainable power solutions to
                    fuel your growth.
                  </p>
                  <a
                    href="services/power-solutions"
                    className="inline-block bg-blue-950 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                  >
                    Learn More
                  </a>
                </div>

                {/* Image Content */}
                <div className="relative">
                  <img
                    src="/power-sol.jpg"
                    alt="Power Solutions"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Solar EPC Solutions */}
          <section className="py-16 bg-gradient-to-br from-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Content */}
                <div className="relative">
                  <img
                    src="/solar-sol.jpg"
                    alt="Power Solutions"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 text-justify">
                    Solar EPC Solutions
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Solar EPC (Engineering, Procurement, and Construction),
                    where we provide end-to-end solar solutions tailored to your
                    energy needs. Whether you're looking for rooftop solar
                    installations or large-scale ground-mounted systems, our
                    expertise ensures efficient, reliable, and cost-effective
                    solar energy solutions.
                  </p>
                  <a
                    href="services/solar-epc"
                    className="inline-block bg-blue-950 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Electrical EPC Solutions */}
          <section className="py-16 bg-gradient-to-br from-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Electrical EPC Solutions
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 text-justify">
                    Electrical EPC (Engineering, Procurement, and Construction).
                    We specialize in delivering turnkey solutions for all your
                    electrical infrastructure needs, ensuring seamless execution
                    from concept to commissioning.
                  </p>
                  <a
                    href="/services/electrical-epc"
                    className="inline-block bg-blue-950 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                  >
                    Learn More
                  </a>
                </div>

                {/* Image Content */}
                <div className="relative">
                  <img
                    src="/Electrical-EPC-Sol.jpg"
                    alt="Power Solutions"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Energy Efficient Lighting */}
          <section className="py-16 bg-gradient-to-br from-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Content */}
                <div className="relative">
                  <img
                    src="energy-efficient-lighting-sol.jpg"
                    alt="Power Solutions"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Energy Efficient Lighting
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 text-justify">
                    Energy-Efficient Lighting solutions, where innovation meets
                    sustainability. Our lighting systems are designed to reduce
                    energy consumption, enhance aesthetics, and lower
                    operational costs for residential, commercial, and
                    industrial spaces.
                  </p>
                  <a
                    href="services/energy-lighting"
                    className="inline-block bg-blue-950 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div> */}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Expertise</h3>
                    <p className="text-gray-600">
                      Years of experience in delivering innovative energy
                      solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Sustainability</h3>
                    <p className="text-gray-600">
                      Commitment to environmental responsibility and green
                      energy
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Innovation</h3>
                    <p className="text-gray-600">
                      Cutting-edge solutions for modern energy challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/why-choose-us.jpg"
                alt="Our work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form  */}

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
