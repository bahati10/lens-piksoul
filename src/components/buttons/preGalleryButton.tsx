import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

const PreGalleryButton: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <button className="flex items-center justify-center border-2 text-custom-headings-color h-12 rounded-full text-[18px] font-poppins font-medium tracking-tight px-4">
          <Image src={images.GALLERYICON} alt="Gallery icon" />
          <span className="w-2"></span>
          <div>Gallery</div>
        </button>
        <Link href="/gallery">
          <Image
            src={images.CONTACTREDIRECT}
            alt="Redirect Icon"
            className="w-12"
          />
        </Link>
      </div>
    </>
  );
};

export default PreGalleryButton;
