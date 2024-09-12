import Link from "next/link";

const LandingGetstartedButton: React.FC = () => {
  return (
    <>
      <Link
        href="#"
        className="flex items-center justify-center text-custom-bg-color text-xl font-jakarta font-extrabold bg-custom-headings-color h-full mx-6 w-[170px] rounded-full tracking-tight"
      >
        Get started
      </Link>
    </>
  );
};

export default LandingGetstartedButton;
