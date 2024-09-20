import TeamSectionIntro from "./TeamSectionIntro";
import MemberCardsContainer from "./memberCardsContainer";

const TeamSection: React.FC = () => {
  return (
    <>
      <div className=" w-11/12">
        <TeamSectionIntro />
        <MemberCardsContainer />
      </div>
    </>
  );
};

export default TeamSection;
