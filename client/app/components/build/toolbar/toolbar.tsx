import RightSection from "../toolbar/toolbar-right-section";
import LeftSection from "../toolbar/toolbar-left-section";
import MiddleSection from "../toolbar/toolbar-middle-section";

const Toolbar = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 px-1 py-2 h-12 flex items-center justify-between w-full overflow-hidden">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  );
};

export default Toolbar;
