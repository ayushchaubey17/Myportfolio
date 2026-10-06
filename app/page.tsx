import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Snapshot } from "@/components/sections/snapshot";
import { Work } from "@/components/sections/work";
import { ArchitectureLab } from "@/components/architecture/architecture-lab";
import { Journey } from "@/components/sections/journey";
import { Stack } from "@/components/sections/stack";
import { Currently } from "@/components/sections/currently";
import { Achievements } from "@/components/sections/achievements";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Snapshot />
        <Work />
        <ArchitectureLab />
        <Journey />
        <Stack />
        <Currently />
        <Achievements />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
