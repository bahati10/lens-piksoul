import { services } from "@/constants/services";
import LensServiceItem from "./serviceItem";
import TitleButtonBox from "../buttons/titleButtonBox";
import { images } from "@/constants/images";

const ServicesContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-11/12">
      <div>
        {/* <div
          className="text-center text-custom-headings-color text-5xl font-jakarta font-bold tracking-tight [word-spacing: 40px] mb-8"
          style={{ wordSpacing: "0.2em" }}
        >
          What we offer?
        </div> */}
        <div
          className="flex justify-center text-center text-custom-font-color mt-4 mb-20 text-2xl font-jakarta font-semibold tracking-tighter"
          style={{ wordSpacing: "0.1em" }}
        >
          <TitleButtonBox
            iconSrc={images.SERVICES.BRIEFCASE1}
            iconAlt="Icon"
            text="Services"
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-between w-full items-center">
        <div className="flex flex-wrap w-11/12">
          {services.map((service, index) => (
            <LensServiceItem
              key={index}
              imageSrc={service.image}
              imageAlt={service.alt}
              title={service.title}
              description={service.description}
              isLastInrow={index == 2 || index == 5}
              isInFirstRow={index < 3}
              rotate={service.rotate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
