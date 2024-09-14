import AboutLearnMore from "../buttons/aboutLearnMore";
import AboutBox from "./aboutBox";
import AboutText from "./aboutText";

const AboutContainer: React.FC = () => {
  return (
    <>
      <div className="w-11/12 flex flex-row justify-between h-72">
        <AboutBox />
        <div className="w-[700px]">
          <AboutText />
          <AboutLearnMore />
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
