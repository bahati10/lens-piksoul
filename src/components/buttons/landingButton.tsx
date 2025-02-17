import Link from "next/link";

const LandingGalleryButton: React.FC = () => {
  return (
    <>
      <Link
        href="#"
        className="flex items-center justify-center text-custom-headings-color text-xl font-jakarta font-extrabold h-full mx-6 w-[175px] border-[2px] border-custom-headings-color rounded-full tracking-tight"
      >
        Gallery
      </Link>
    </>
  );
};

export default LandingGalleryButton;
