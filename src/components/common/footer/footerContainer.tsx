import BottomBar from "./bottomBar";
import TopBar from "./topBar";
import FooterGalleryButton from "@/components/buttons/footerGalleryButton";

const FooterContainer: React.FC = () => {
  return (
    <>
      <div className="w-11/12 border bg-custom-footer-bg rounded-xl p-10">
        <TopBar />
        <FooterGalleryButton />
        <hr className="border-custom-border-color h-10 border-t-4" />
        <BottomBar />
      </div>
    </>
  );
};

export default FooterContainer;
