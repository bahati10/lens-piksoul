import { images } from "@/constants/images";
import Image from "next/image";

const FooterContacts: React.FC = () => {
  return (
    <div>
      <div className="text-2xl text-custom-toolbar-color font-poppins font-medium tracking-tighter">
        Reach out
      </div>
      <div className="flex flex-col gap-y-2 mt-4">
        <div className="flex flex-row items-center">
          <Image src={images.PHONEICON} alt="Phone icon" />
          <div className="text-custom-font-color font-poppins font-medium ml-3">
            +250 782 2822 828
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image src={images.EMAILICON} alt="Phone icon" />
          <div className="text-custom-font-color font-poppins font-medium ml-3">
            lenspiksoul@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
