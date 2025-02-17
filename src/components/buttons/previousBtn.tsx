import { images } from "@/constants/images";
import Image from "next/image";

interface PreviousBtnProps {
  onClick: () => void;
}

const PreviousBtn: React.FC<PreviousBtnProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        <Image src={images.gallery.PREVIOUS_BTN} alt="Previous button" />
      </button>
    </>
  );
};

export default PreviousBtn;
