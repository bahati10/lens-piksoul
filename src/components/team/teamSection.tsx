<<<<<<< HEAD
const TeamSection: React.FC = () => {
  return (
    <>
      <div></div>
=======
import TeamSectionIntro from "./TeamSectionIntro";
import MemberCardsContainer from "./memberCardsContainer";

const TeamSection: React.FC = () => {
  return (
    <>
      <div className=" w-11/12">
        <TeamSectionIntro />
        <MemberCardsContainer />
      </div>
>>>>>>> e9943cc (Feature: Team page implementation)
    </>
  );
};

export default TeamSection;
