import Image from "next/image";

interface GalleryLabelProps {
  labelText: string;
  iconSrc: string;
  iconAlt: string;
}

const GalleryLabel: React.FC<GalleryLabelProps> = ({
  labelText,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div className="flex justify-start">
      <button className="flex items-center justify-center border-2 text-custom-headings-color px-4 w-36 h-12 rounded-full text-[18px] font-poppins font-semibold tracking-tight">
        <Image src={iconSrc} alt={iconAlt} className="w-4" />
        <span className="w-2"></span>
        {labelText}
      </button>
    </div>
  );
};

export default GalleryLabel;
