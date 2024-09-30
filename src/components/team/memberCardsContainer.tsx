import { members } from "@/constants/members";
import MemberCard from "./memberCard";

const MemberCardsContainer = () => {
  return (
    <>
      <div className="flex flex-row justify-around border-2 border-custom-font-color py-10 rounded-2xl mt-16 mb-28">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            memberName={member.name}
            position={member.position}
            imageSrc={member.image}
          />
        ))}
      </div>
    </>
  );
};

export default MemberCardsContainer;
