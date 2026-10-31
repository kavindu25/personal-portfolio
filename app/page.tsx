import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SelectedWork, SideProjects, professional } from "./components/SelectedWork";
import { Stage } from "./components/Stage";
import { Writing } from "./components/Writing";
import { Skills } from "./components/Skills";
import { profile } from "./data/profile";

// Re-render hourly so new Medium posts appear without a redeploy.
export const revalidate = 3600;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.siteUrl,
  email: profile.email,
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.medium],
  worksFor: { "@type": "Organization", name: "Skaleminds", url: "https://skaleminds.com/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Stage projects={professional} years="4 yrs in production" hero={<Hero />} work={<SelectedWork />} />
        <SideProjects />
        <Experience />
        <Skills />
        <Education />
        <Writing />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
