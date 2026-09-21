import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { Work } from "@/components/sections/Work";
import { Engineering } from "@/components/sections/Engineering";
import { Writing } from "@/components/sections/Writing";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Work />
      <Engineering />
      <Writing />
      <About />
      <Contact />
    </>
  );
}
