import Image from "next/image";

interface serviceInfo {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  isLastInrow: boolean;
  isInFirstRow: boolean;
  rotate?: string;
}

const LensServiceItem: React.FC<serviceInfo> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  isLastInrow = false,
  isInFirstRow = false,
  rotate = "",
}) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-1/3 border-custom-border-color ${
          isLastInrow ? "" : "border-r-2"
        } ${isInFirstRow ? "h-[340px] border-b-2" : "h-[340px]"}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          className={`mb-12 mt-8 w-10 ${rotate}`}
        />
        <div className="text-custom-toolbar-color text-2xl font-jakarta font-bold mb-2">
          {title}
        </div>
        <div className="text-center text-base text-custom-font-color font-poppins font-medium tracking-tighter px-14">
          {description}
        </div>
      </div>
    </>
  );
};

export default LensServiceItem;
