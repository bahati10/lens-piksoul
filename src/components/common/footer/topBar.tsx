import DropNote from "@/components/buttons/dropNote";
import { images } from "@/constants/images";
import Image from "next/image";
import FooterContacts from "./footerContacts";

const TopBar: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div>
          <Image src={images.LOGO} alt="APP logo" className="w-52 mb-6" />
          <DropNote />
        </div>
        <div className="mt-6 text-custom-toolbar-color text-[38px] text-center font-jakarta font-medium tracking-tighter leading-[50px]">
          What to explore our <br /> Gallery 🤷🏾
        </div>
        <FooterContacts />
      </div>
    </>
  );
};

export default TopBar;
