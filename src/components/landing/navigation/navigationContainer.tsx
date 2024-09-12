import NavLogo from "./logo";
import LandingNavContact from "./contact";
import ToolbarItems from "./toolbar";

const NavContainer: React.FC = () => {
  return (
    <>
      <div className="mt-8 mx-12 flex justify-between h-14">
        <div className="flex items-center w-[240px]">
          <NavLogo />
        </div>
        <ToolbarItems />
        <div className="flex flex-row w-[240px]">
          <LandingNavContact />
        </div>
      </div>
    </>
  );
};

export default NavContainer;
