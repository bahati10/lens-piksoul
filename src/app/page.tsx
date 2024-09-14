import About from "@/components/about/about";
import LandingComp from "@/components/landing/home/landingHome";
import TeamSection from "@/components/team/teamSection";

export default function Home() {
  return (
    <div>
      <LandingComp />
      <About />
      <TeamSection />
    </div>
  );
}
