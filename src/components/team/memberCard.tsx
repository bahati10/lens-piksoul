import Image from "next/image";

interface MemberProps {
  imageSrc: string;
  memberName: string;
  position: string;
}

const MemberCard: React.FC<MemberProps> = ({
  memberName,
  position,
  imageSrc,
}) => {
  return (
    <>
      <div className="border-4 border-custom-team-border-color w-[390px] h-[552px] rounded-b-3xl rounded-t-md overflow-hidden">
        <Image src={imageSrc} alt="MEMBER1" />
        <div className="flex flex-col justify-center h-32">
          <div className="text-center text-3xl font-jakarta font-semibold tracking-tighter">
            {memberName}
          </div>
          <div className="text-center font-jakarta font-medium text-xl text-custom-font-color">
            {position}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
