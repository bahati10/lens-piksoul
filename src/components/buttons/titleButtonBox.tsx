import Image from "next/image";

interface TitleButtonBoxProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

const TitleButtonBox: React.FC<TitleButtonBoxProps> = ({
  iconSrc,
  iconAlt,
  text,
}) => {
  return (
    <div className="flex justify-end">
      <button className="flex items-center justify-center border-2 text-custom-headings-color w-[145px] h-12 rounded-full text-[18px] font-poppins font-semibold tracking-tight">
        <Image src={iconSrc} alt={iconAlt} className="w-4" />
        <span className="w-2"></span>
        {text}
      </button>
    </div>
  );
};

export default TitleButtonBox;
