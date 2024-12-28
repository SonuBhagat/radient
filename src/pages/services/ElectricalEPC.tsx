import ServiceHero from "../../components/ServiceHero";
// import ServiceFeature from "../../components/ServiceFeature";
import { Settings, StarsIcon, Layers, Timer } from "lucide-react";

export default function ElectricalEPC() {
  const features = [
    {
      icon: <Settings className="h-6 w-6 text-green-600" />,
      title: "Comprehensive Expertise",
      description:
        "From design and procurement to installation and testing, we provide end-to-end solutions.",
    },
    {
      icon: <StarsIcon className="h-6 w-6 text-blue-600" />,
      title: "High-Quality Standards",
      description:
        "We ensure compliance with industry standards and use top-grade materials for safety and durability.",
    },
    {
      icon: <Layers className="h-6 w-6 text-green-500" />,
      title: "Customized Solutions",
      description:
        "Tailored to meet the unique requirements of industries, commercial spaces, and residential projects.",
    },
    {
      icon: <Timer className="h-6 w-6 text-yellow-600" />,
      title: "Timely Delivery",
      description:
        "Our project management expertise ensures on-time completion without compromising quality.",
    },
  ];

  return (
    <div>
      <ServiceHero
        service="Electrical EPC Solutions"
        description="Building Reliable and Efficient Electrical Systems"
        image="/Electrical-EPC-Sol.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-gray-600 max-w-2x2 mx-auto mb-4 text-lg">
              Welcome to our Electrical EPC (Engineering, Procurement, and
              Construction) services page. We specialize in delivering turnkey
              solutions for all your electrical infrastructure needs, ensuring
              seamless execution from concept to commissioning.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose Our Energy-Efficient Lighting Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Electrical EPC Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Power Distribution Systems */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/open-access-power.jpg" // Replace with actual image path
                alt="Open Access Power"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Power Distribution Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Delivering efficient and robust power distribution systems for
                  diverse applications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Design and Installation: Comprehensive solutions for HT/LT
                    power distribution.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Substations: Expertise in the setup of substations for
                    seamless power delivery.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Load Analysis: Accurate load calculations for optimized
                    energy efficiency.
                  </li>
                </ul>
              </div>
            </div>

            {/* Industrial and Commercial Electrification */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/bilateral.jpg" // Replace with actual image path
                alt="Bilateral Power Agreements"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Industrial and Commercial Electrification
                </h3>
                <p className="text-gray-600 mb-4">
                  Innovative and reliable electrification services tailored for
                  large-scale needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Industrial Plants: Electrical systems for manufacturing
                    units and industrial facilities.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Commercial Spaces: Smart, energy-efficient solutions for
                    offices and retail complexes.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Energy Optimization: Advanced systems to reduce energy
                    wastage and operational costs.
                  </li>
                </ul>
              </div>
            </div>

            {/* Renewable Energy Integration */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/bilateral.jpg" // Replace with actual image path
                alt="Bilateral Power Agreements"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Renewable Energy Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration of renewable energy sources into existing
                  electrical systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Solar and Wind: Expertise in connecting renewable energy
                    solutions to grid systems.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Energy Storage: Incorporation of battery energy storage
                    systems (BESS) for enhanced reliability.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Sustainable Solutions: Helping businesses transition to
                    greener energy alternatives.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Project here */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Our Projects
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Delivering Excellence in Electrical EPC
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/solar-sol.jpg" // Replace with actual project image path
                  alt="Rooftop Solar Installation"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Rooftop Solar Installation
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Location:</strong> Dwarka, Delhi
                </p>
                <p className="text-gray-600">
                  <strong>Capacity:</strong> 50 kW
                </p>
              </div>

              {/* Project 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/solar-sol.jpg" // Replace with actual project image path
                  alt="Ground-Mounted Solar System"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Ground-Mounted Solar System
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Location:</strong> Lucknow, U.P
                </p>
                <p className="text-gray-600">
                  <strong>Capacity:</strong> 1 MW
                </p>
              </div>

              {/* Project 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/solar-sol.jpg" // Replace with actual project image path
                  alt="Ground-Mounted Solar System"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Ground-Mounted Solar System
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Location:</strong> Kolkata, West Bengal
                </p>
                <p className="text-gray-600">
                  <strong>Capacity:</strong> 1 MW
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
