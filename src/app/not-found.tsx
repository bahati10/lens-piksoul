import NotFoundHomeBtn from "@/components/buttons/NotFoundHomeBtn";
import { images } from "@/constants/images";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-[150px] font-bold font-poppins leading-none">
          404
        </div>
        <div
          className="text-[18px] font-bold font-poppins tracking-tighter mb-4"
          style={{ wordSpacing: "5px" }}
        >
          {/* Page not found */}
          PAGE NOT FOUND
        </div>
        <NotFoundHomeBtn />
      </div>
    </>
  );
};

export default NotFound;
