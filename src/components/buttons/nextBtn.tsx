import { images } from "@/constants/images";
import Image from "next/image";

interface NextBtnProps {
  onClick: () => void;
}

const NextBtn: React.FC<NextBtnProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        <Image src={images.gallery.NEXT_BTN} alt="Next button" />
      </button>
    </>
  );
};

export default NextBtn;
