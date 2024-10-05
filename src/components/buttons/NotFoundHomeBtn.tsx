import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

const NotFoundHomeBtn: React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      <button className="flex items-center justify-center border-[2px] border-custom-headings-color rounded-full text-[18px] font-poppins font-medium tracking-tight px-3 py-2">
        <Image src={images.HOME_ICON} alt="Gallery icon" className="w-6" />
        <span className="w-2"></span>
        <div className="text-lg text-custom-toolbar-color font-semibold font-poppins">
          Home
        </div>
      </button>
      <Link href="/">
        <Image
          src={images.CONTACTREDIRECT}
          alt="Redirect Icon"
          className="w-12"
        />
      </Link>
    </div>
  );
};

export default NotFoundHomeBtn;
