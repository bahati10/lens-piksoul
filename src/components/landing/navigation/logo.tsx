import { images } from "@/constants/images";
import Image from "next/image";

const NavLogo = () => {
  return (
    <>
      <div>
        <Image className="w-32" src={images.LOGO} alt="" />
      </div>
    </>
  );
};

export default NavLogo;
