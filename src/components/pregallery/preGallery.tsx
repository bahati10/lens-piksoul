"use client";

import { images } from "@/constants/images";
import Image from "next/image";
import GalleryLabel from "../buttons/Gallerylabel";
import NextBtn from "../buttons/nextBtn";
import PreviousBtn from "../buttons/previousBtn";
import PreGalleryButton from "../buttons/preGalleryButton";
import { useState } from "react";

const galleryItems = [
  { image: images.gallery.KID_IMAGE, label: "Portraits" },
  { image: images.gallery.FOREST, label: "Aerial" },
  { image: images.gallery.WEDDING, label: "Wedding" },
  { image: images.gallery.WEDDING, label: "Portraits" },
];

const PreGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <>
      <div className="flex flex-col items-center justify-center w-11/12 rounded-2xl py-10 bg-custom-team-border-color">
        <div className="h-[700px] overflow-hidden rounded-2xl">
          <Image
            src={currentItem.image}
            alt={`Gallery image ${currentIndex + 1}`}
            className="flex flex-col items-center justify-center"
            width={1200}
            height={700}
            objectFit="cover"
          />
        </div>
        <div className="w-[1210px]  flex flex-row justify-between mt-6">
          <div className="flex flex-row gap-x-3">
            <GalleryLabel
              iconSrc={images.gallery.FRAME2}
              iconAlt="frame icon"
              labelText={currentItem.label}
            />
          </div>
          <div className="flex items-center gap-x-4">
            <PreviousBtn onClick={handlePrevious} />
            <NextBtn onClick={handleNext} />
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
