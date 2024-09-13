import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

const BottomBar: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <Link href="">
            <Image src={images.INSTAGRAM} alt="Instagram Icon" />
          </Link>
          <Link href="">
            <Image src={images.X} alt="Instagram Icon" />
          </Link>
          <Link href="">
            <Image src={images.YOUTUBE} alt="Instagram Icon" />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Image src={images.COPYRIGHT} alt="Copyright logo" className="w-7" />
          <div className="text-lg text-custom-toolbar-color font-semibold font-jakarta tracking-tight">
            2024 — copyright
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
