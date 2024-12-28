import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team of energy experts"
        image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3"
      />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? We're here to help. Fill out
                the form and our team will get back to you shortly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-600">
                      A4/55 Golf Link Apartment, Dwarka Sector 21, New Delhi,
                      110075
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-600">+91 93456 74890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-600">info@radientpower.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
