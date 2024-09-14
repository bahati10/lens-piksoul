import About from "@/components/about/about";
import LandingComp from "@/components/landing/home/landingHome";
import Team from "@/components/team/team";

export default function Home() {
  return (
    <div>
      <LandingComp />
      <About />
      <Team />
    </div>
  );
}
