import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRecoilValue } from "recoil";
import { Files } from "@/states/state";

const MiddleSection = () => {
    const files = useRecoilValue(Files);
  return (
    <div className="w-[50rem] overflow-x-scroll">
      <Tabs defaultValue={files[0].id}>
        <TabsList className="px-2 flex gap-2 justify-start">
            {files.map((file, index) => {
                return(
                    <TabsTrigger key={index} value={file.id}> {file.name} </TabsTrigger>
                );
            })}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MiddleSection;
