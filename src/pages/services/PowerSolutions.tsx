import ServiceHero from "../../components/ServiceHero";
// import ServiceFeature from "../../components/ServiceFeature";
import { DollarSign, Leaf, Settings, ShieldCheck } from "lucide-react";

export default function PowerSolutions() {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "Cost Efficiency",
      description:
        "Significantly reduce energy costs with strategic power procurement options.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Sustainability Focus",
      description:
        "Access green energy options that align with your environmental goals.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: "Reliability & Flexibility",
      description:
        "Enjoy uninterrupted power supply tailored to your operational needs.",
    },
    {
      icon: <Settings className="h-6 w-6 text-yellow-600" />,
      title: "Expert Guidance",
      description:
        "Leverage our expertise in navigating regulatory frameworks and maximizing benefits.",
    },
  ];
  return (
    <div>
      {/* Service Hero Section  */}
      <ServiceHero
        service="Power Solutions"
        description="Empowering Businesses with Reliable Energy Solutions"
        image="/power-sol.jpg"
      />

      {/* Service page description  */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-2x2 mx-auto mb-4 text-lg">
              Welcome to our Power Solutions page, where we provide cutting-edge
              energy options tailored to meet the dynamic needs of businesses
              and industries. With a focus on Open Access and Bilateral Power
              arrangements, we ensure cost-effective, reliable, and sustainable
              power solutions to fuel your growth.
            </p>
          </div>
        </div>
      </section>

      {/* why choose us USP  */}
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

      {/* our offering into this services start here  */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Power Offerings
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Open Access Power */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/open-access-power.jpg" // Replace with actual image path
                alt="Open Access Power"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Open Access Power
                </h3>
                <p className="text-gray-600 mb-4">
                  Unlock the benefits of Open Access power procurement for
                  large-scale energy users.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Freedom of Choice in energy suppliers
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Cost Savings through reduced tariffs
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Green Energy Options available
                  </li>
                </ul>
              </div>
            </div>

            {/* Bilateral Power Agreements */}
            <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/bilateral.jpg" // Replace with actual image path
                alt="Bilateral Power Agreements"
                className="w-full lg:w-1/2 h-56 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Bilateral Power Agreements
                </h3>
                <p className="text-gray-600 mb-4">
                  Tailored energy agreements for businesses seeking stability
                  and control.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Custom Contracts with power producers
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Price Stability through locked rates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span>
                    Reliable Supply guarantee
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
