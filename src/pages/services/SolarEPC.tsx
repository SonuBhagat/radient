import ServiceHero from "../../components/ServiceHero";
import { Settings, ShieldCheck, Layers, Globe2Icon } from "lucide-react";

export default function SolarEPC() {
  const features = [
    {
      icon: <Settings className="h-6 w-6 text-green-600" />,
      title: "Comprehensive Solutions",
      description:
        "From design and engineering to procurement and installation, we handle every step with precision.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: "Quality Assurance",
      description:
        "We use only premium materials and advanced technologies to maximize efficiency and longevity.",
    },
    {
      icon: <Layers className="h-6 w-6 text-green-500" />,
      title: "Customized Projects",
      description:
        "Tailored solutions to meet the unique energy needs of residential, commercial, and industrial clients.",
    },
    {
      icon: <Globe2Icon className="h-6 w-6 text-yellow-600" />,
      title: "Sustainability Focus: ",
      description:
        "Contribute to a greener planet while enjoying significant savings on energy costs.",
    },
  ];

  return (
    <div>
      <ServiceHero
        service="Solar EPC Solutions"
        description="Empowering a Sustainable Energy Future with End-to-End Solar Solutions"
        image="/solar-sol.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-gray-600 max-w-2x2 mx-auto mb-4 text-lg">
              Welcome to our Solar EPC (Engineering, Procurement, and
              Construction) page, where we provide end-to-end solar solutions
              tailored to your energy needs. Whether you're looking for rooftop
              solar installations or large-scale ground-mounted systems, our
              expertise ensures efficient, reliable, and cost-effective solar
              energy solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose Our Solar EPC Services?
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
            Our Solar Solutions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Rooftop Solar */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/open-access-power.jpg" // Replace with actual image path
                alt="Open Access Power"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Rooftop Solar
                </h3>
                <p className="text-gray-600 mb-4">
                  Turn your unused roof space into a powerhouse of renewable
                  energy!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Ideal for homes, offices, and industrial buildings.
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Minimizes electricity bills while increasing property value.
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Reduces dependency on conventional power grids.
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Easy to install and maintain with a quick return on
                    investment.
                  </li>
                </ul>
              </div>
            </div>

            {/* Ground-Mounted Solar */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/bilateral.jpg" // Replace with actual image path
                alt="Bilateral Power Agreements"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Ground-Mounted Solar
                </h3>
                <p className="text-gray-600 mb-4">
                  Harness the power of the sun with large-scale ground-mounted
                  systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Perfect for commercial, utility, or large-scale energy
                    projects.
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Designed for maximum energy output and efficiency.
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Flexible installation options for diverse terrains.
                  </li>
                  <li className="flex items-center">
                    <span className="textgreen-600 mr-2">✔</span>
                    Ideal for industries looking to achieve energy independence
                    and sustainability goals.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <ServiceFeature
            title="Why Choose Our Solar EPC Solutions?"
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
              Our Solar Projects
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Showcasing Excellence in Solar Installations
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
