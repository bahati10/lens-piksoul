import About from "@/components/about/about";
import LandingComp from "@/components/landing/home/landingHome";
import Services from "@/components/services/services";
import Team from "@/components/team/team";

export default function Home() {
  return (
    <div>
      <LandingComp />
      <About />
      <Services />
      <Team />
    </div>
  );
}
