import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Clients } from "@/components/Clients";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <Hero />
      <Services />
      <Team />
      <Clients />
    </div>
  );
};

export default Index;