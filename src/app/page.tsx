import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import projectsData from "@/data/projects.json";
import { getPortfolioData } from "@/lib/getPortfolioData";

export default async function Home() {
  const localProjects = getPortfolioData();
  const finalProjects = localProjects.length > 0 ? localProjects : projectsData;

  return (
    <main className="bg-background min-h-screen">
      <Loader />
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background">
        <About />
        <Portfolio externalProjects={finalProjects} />
        <Pricing />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
