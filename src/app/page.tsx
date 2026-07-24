import Hero from "@/components/Hero";
// import About from "@/components/About";
import Projects from "@/components/Projects";
import NewsAnnouncements from "@/components/NewsAnouncements";
// import Highlights from "@/components/Highlights"; // import Activities from "@/components/Activities";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsAnnouncements />
      <Projects />

      {/* <Highlights /> */}
      {/* <Activities /> */}
    </>
  );
}
