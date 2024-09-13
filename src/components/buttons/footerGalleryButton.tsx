import { images } from "@/constants/images";
import Image from "next/image";

const FooterGalleryButton: React.FC = () => {
  return (
    <>
      <div
        className="flex flex-row justify-center my-10
      "
      >
        <button className="flex items-center justify-center border-2 text-custom-headings-color w-[160px] h-[60px] rounded-full text-[18px] font-poppins font-medium tracking-tight">
          <Image src={images.GALLERYICON} alt="Gallery icon" className="mx-2" />
          <div className="mx-2">Gallery</div>
        </button>
        <Image src={images.CONTACTREDIRECT} alt="Redirect Icon" />
      </div>
    </>
  );
};

export default FooterGalleryButton;
