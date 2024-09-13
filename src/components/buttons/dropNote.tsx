import { images } from "@/constants/images";
import Image from "next/image";

const DropNote: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[60px] border-2 border-custom-font-color w-44 text-xl rounded-full px-2 cursor-pointer">
        <Image src={images.DROPNOTEICON} alt="Drop Note icon"></Image>
        <div className="px-2 text-custom-headings-color text-lg font-medium font-poppins tracking-tight">
          Drop a note
        </div>
      </div>
    </>
  );
};

export default DropNote;
