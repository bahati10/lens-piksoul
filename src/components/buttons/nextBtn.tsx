import { images } from "@/constants/images";
import Image from "next/image";

// interface NextBtnProps {
//   onClick: () => void;
// }

const NextBtn: React.FC = () => {
  return (
    <>
      <button>
        <Image src={images.gallery.NEXT_BTN} alt="Next button" />
      </button>
    </>
  );
};

export default NextBtn;
