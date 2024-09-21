import LandingGetstartedButton from "@/components/buttons/getstartedButton";
import LandingGalleryButton from "@/components/buttons/landingButton";
import NavContainer from "@/components/landing/navigation/navigationContainer";
import LANDING_IMAGE from "@/app/assets/LANDINGIMAGE.svg";
import Image from "next/image";

const HomeComp: React.FC = () => {
  return (
    <>
      <div className="relative border-2 border-custom-border-color w-11/12 h-[760px] rounded-3xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={LANDING_IMAGE}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background"
            priority
            style={{
              filter: "grayscale(100%)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative">
          <NavContainer />
          <div className="z-20 h-full flex items-center justify-center font-jakarta mt-36 text-center text-7xl text-custom-headings-color font-extrabold tracking-tighter leading-[90px]">
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
