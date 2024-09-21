import { images } from "@/constants/images";
import Image from "next/image";
import GalleryLabel from "../buttons/Gallerylabel";
import NextBtn from "../buttons/nextBtn";
import PreviousBtn from "../buttons/previousBtn";
import PreGalleryButton from "../buttons/preGalleryButton";
import TitleButtonBox from "../buttons/titleButtonBox";

const PreGallery: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-11/12 rounded-2xl py-10 bg-custom-team-border-color">
        <div className="w-11/12 text-end">Recent</div>
        <div className="h-[700px] overflow-hidden rounded-2xl">
          <Image
            src={images.gallery.KID_IMAGE}
            alt="Photo by Joshua-oluwagbemiga-Jq0coU4cdFE-unsplash 1"
            className="flex flex-col items-center justify-center"
          />
        </div>
        <div className="w-11/12 px-10 flex flex-row justify-between mt-6">
          <div className="flex flex-row gap-x-3">
            <GalleryLabel
              iconSrc={images.gallery.FRAME2}
              iconAlt="frame icon"
              labelText="Potraits"
            />
          </div>
          <div className="flex items-center gap-x-4">
            <PreviousBtn />
            <NextBtn />
          </div>
          <div>
            <PreGalleryButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreGallery;
