export const Clients = () => {
  return (
    <section className="py-16 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-lighter to-dark opacity-50" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-12 flex items-center justify-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-24 h-8 bg-white/10 rounded-md backdrop-blur-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};