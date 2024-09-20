import { images } from "@/constants/images";
import Image from "next/image";
import TeamButton from "../buttons/teamButton";

const TeamSectionIntro: React.FC = () => {
  return (
    <div>
      <div className="text-center text-7xl text-custom-toolbar-color font-jakarta font-bold tracking-tighter mb-10">
        <span className="text-fade-gradient">Team</span>{" "}
        <span className="text-6xl">💫</span>
      </div>
      <Image
        src={images.TEAMICON}
        alt="Team custom icon like sunrays"
        className="mb-2"
      />
      <div className="flex flex-col justify-between">
        <div className="text-5xl font-jakarta tracking-tighter font-medium leading-[60px] text-custom-toolbar-color ws-3">
          Meet <span className="text-custom-font-color">the passionate </span>
          storytellers <br />
          <span className="text-custom-font-color">behind the</span> lens,
          talented <br />
          <span className="text-custom-font-color">individuals</span> crafting
          <span className="text-custom-font-color"> your</span> vision.
        </div>
        <TeamButton />
      </div>
    </div>
  );
};

export default TeamSectionIntro;
