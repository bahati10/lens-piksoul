import { images } from "@/constants/images";
import Image from "next/image";

const LandingNavContact: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center h-full w-3/4 border-2 border-custom-border-color rounded-full font-poppins text-custom-toolbar-color">
        Say hello
      </div>
      <Image src={images.CONTACTREDIRECT} alt="Arrow icon" />
    </>
  );
};

export default LandingNavContact;
