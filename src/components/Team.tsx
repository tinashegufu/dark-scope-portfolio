const team = [
  {
    name: "Mike Washoski",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    description: "Lead designer with 10+ years of experience in digital product design.",
  },
  {
    name: "Hanna Smith",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Specialist in user interface design and brand development.",
  },
  {
    name: "Lexi Black",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Expert in user experience design and interaction patterns.",
  },
  {
    name: "Kevin Widagdo",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Creative director focusing on innovative design solutions.",
  },
];

export const Team = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-50" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm tracking-wider text-gray-300 uppercase mb-4">Our Team</p>
          <h2 className="text-4xl font-bold text-white">
            Meet Expert <span className="text-primary">Team.</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Our talented team of designers and developers brings together years of experience
            and a passion for creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group rounded-xl overflow-hidden bg-dark-lighter border border-gray-800 
                       hover:border-primary transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter blur-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-gray-300 mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};