import ServiceHero from "../../components/ServiceHero";
// import ServiceFeature from "../../components/ServiceFeature";
import { DollarSign, Cpu, Leaf, Layout } from "lucide-react";

export default function EnergyLighting() {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "Cost Savings",
      description:
        "Significantly lower electricity bills with high-efficiency lighting systems.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: "Advanced Technology",
      description:
        "Utilize LED and smart lighting solutions for superior performance.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-500" />,
      title: "Eco-Friendly",
      description:
        "Reduce carbon footprint with environmentally sustainable lighting options.",
    },
    {
      icon: <Layout className="h-6 w-6 text-yellow-600" />,
      title: "Custom Designs",
      description: "Tailored solutions to suit the unique needs of your space.",
    },
  ];

  return (
    <div>
      <ServiceHero
        service="Energy-Efficient Lighting Solutions"
        description="Illuminating a Sustainable Future with Smart Lighting Systems"
        image="/energy-efficient-lighting-sol.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-gray-600 max-w-2x2 mx-auto mb-4 text-lg">
              Welcome to our Energy-Efficient Lighting solutions page, where
              innovation meets sustainability. Our lighting systems are designed
              to reduce energy consumption, enhance aesthetics, and lower
              operational costs for residential, commercial, and industrial
              spaces.
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
            Our Lighting Solutions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* LED Lighting */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/open-access-power.jpg" // Replace with actual image path
                alt="Open Access Power"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  LED Lighting
                </h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art LED lighting solutions for every application.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Residential: Modern designs that blend with your interiors.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Commercial: Bright, efficient lighting for offices, retail
                    stores, and hospitality spaces.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Industrial: Durable, high-output lighting for factories and
                    warehouses.
                  </li>
                </ul>
              </div>
            </div>

            {/* Smart Lighting Systems */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/bilateral.jpg" // Replace with actual image path
                alt="Bilateral Power Agreements"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Smart Lighting Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Innovative lighting solutions for modern spaces.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Automation: Control lighting remotely with smart devices.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Energy Optimization: Adjust brightness and color temperature
                    for maximum efficiency.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Sensors: Motion-activated and daylight-sensing systems for
                    enhanced savings.
                  </li>
                </ul>
              </div>
            </div>

            {/* Outdoor and Landscape Lighting */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/bilateral.jpg" // Replace with actual image path
                alt="Bilateral Power Agreements"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Outdoor and Landscape Lighting
                </h3>
                <p className="text-gray-600 mb-4">
                  Eco-friendly outdoor lighting solutions for a variety of
                  applications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Architectural: Highlight building features with
                    energy-efficient lighting.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Landscape: Illuminate gardens, pathways, and outdoor spaces.
                  </li>
                  <li className="flex items-first">
                    <span className="text-green-600 mr-2">✔</span>
                    Street Lighting: High-performance, long-lasting streetlights
                    for public areas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <ServiceFeature
                        title="Why Choose Our Lighting Solutions?"
                        description="We provide cutting-edge energy options tailored to meet the dynamic needs of businesses and industries."
                        features={[
                          "Cost Efficiency: Significantly reduce energy costs",
                          "Sustainability Focus: Access green energy options",
                          "Reliability & Flexibility: Enjoy uninterrupted power supply",
                          "Expert Guidance: Navigate regulatory frameworks"
                        ]}
                      /> */}

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
