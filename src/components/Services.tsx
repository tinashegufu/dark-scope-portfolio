import { Paintbrush, Globe, Smartphone, Video } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Brand Identity",
    description: "Creating memorable brand experiences through thoughtful design and strategy.",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Building responsive, modern websites that engage and convert visitors.",
  },
  {
    icon: Smartphone,
    title: "UI & UX Design",
    description: "Crafting intuitive interfaces and seamless user experiences across platforms.",
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Producing compelling video content that tells your brand's story.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-dark opacity-50" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm tracking-wider text-gray-300 uppercase mb-4 relative inline-block">
            OUR SERVICES
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"></span>
          </p>
          <h2 className="text-4xl font-bold text-white">
            What We <span className="text-primary">Do.</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive design solutions tailored to your needs, focusing on creating
            impactful digital experiences that drive results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-dark-lighter backdrop-blur-sm 
                       border border-gray-800 hover:border-primary transition-all 
                       duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};