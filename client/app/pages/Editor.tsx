import Toolbar from "@/components/build/toolbar/toolbar";
import { ResizableLayout } from "@/components/build/resizable-layout";
const Editor = () => {
  return (
    <>
      <Toolbar />
      <div className="h-[90vh]">
        <ResizableLayout />
      </div>
    </>
  );
};

export default Editor;
