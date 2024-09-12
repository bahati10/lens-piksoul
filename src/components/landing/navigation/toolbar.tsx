import Link from "next/link";

const ToolbarItems = () => {
  return (
    <>
      <div className="flex items-center justify-around w-2/5 border-2 border-custom-border-color rounded-full px-4">
        <Link href="#" className="font-poppins text-custom-toolbar-color">
          Home
        </Link>
        <span className="text-custom-border-color text-4xl">|</span>
        <Link href="#" className="font-poppins text-custom-toolbar-color">
          Services
        </Link>
        <span className="text-custom-border-color text-4xl">|</span>
        <Link href="#" className="font-poppins text-custom-toolbar-color">
          Projects
        </Link>
        <span className="text-custom-border-color text-4xl">|</span>
        <Link href="#" className="font-poppins text-custom-toolbar-color">
          Gallery
        </Link>
      </div>
    </>
  );
};

export default ToolbarItems;
