import LandingGetstartedButton from "@/components/buttons/getstartedButton";
import LandingGalleryButton from "@/components/buttons/landingButton";
import NavContainer from "@/components/landing/navigation/navigationContainer";

const HomeComp: React.FC = () => {
  return (
    <>
      <div className="border-2 border-custom-border-color w-11/12 h-[760px] rounded-3xl">
        <div>
          <NavContainer />
          <div className="font-jakarta mt-36 text-center text-7xl text-custom-toolbar-color font-extrabold tracking-tighter leading-[90px]">
            Capture great memories <br /> with us.
          </div>
          <div className="flex justify-center mt-7 h-14">
            <LandingGalleryButton />
            <LandingGetstartedButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComp;
