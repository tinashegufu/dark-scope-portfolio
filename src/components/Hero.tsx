import { Facebook, Twitter, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-50" />
      
      <div className="container max-w-4xl relative z-10 space-y-8 text-center">
        <div className="space-y-6 animate-fade-up">
          <p className="text-sm tracking-wider text-gray-300 uppercase">About Personal</p>
          
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Profile"
              className="w-full h-full object-cover filter blur-sm"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-white">
            Hello, I'm Tinashe <span className="text-primary">Gufu</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate about creating beautiful digital experiences that combine form and function.
            With years of experience in design and development, I bring ideas to life through clean,
            modern aesthetics and intuitive interfaces.
          </p>
          
          <div className="pt-4">
            <p className="font-serif text-2xl text-white italic">Tinashe Gufu</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6 pt-8 animate-fade-in">
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};