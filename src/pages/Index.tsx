import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Clients } from "@/components/Clients";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <Services />
      <Team />
      <Clients />
    </div>
  );
};

export default Index;