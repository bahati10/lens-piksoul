import About from "@/components/about/about";
import LandingComp from "@/components/landing/home/landingHome";
import PreGalleryContainer from "@/components/pregallery/preGalleryContainer";
import Services from "@/components/services/services";
import Team from "@/components/team/team";

export default function Home() {
  return (
    <div>
      <LandingComp />
      <About />
      <PreGalleryContainer />
      <Services />
      <Team />
    </div>
  );
}
