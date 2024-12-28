import Hero from "../components/Hero";

export default function About() {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Leading the Way in Sustainable Energy Solutions"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
      />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-8">
                We are committed to providing innovative and sustainable energy
                solutions that help businesses reduce their environmental impact
                while improving their bottom line. Through cutting-edge
                technology and expert service, we're building a greener future
                for generations to come.
              </p>

              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-gray-600">
                      Constantly pushing boundaries in energy solutions
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Sustainability</h4>
                    <p className="text-gray-600">
                      Committed to environmental stewardship
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-gray-600">
                      Delivering superior quality in every project
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
                alt="Our team"
                className="rounded-lg shadow-lg mb-8"
              />

              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
              <p className="text-gray-600">
                With years of experience in the energy sector, our team of
                experts brings unparalleled knowledge and skill to every
                project. We specialize in comprehensive energy solutions that
                combine innovation with reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
