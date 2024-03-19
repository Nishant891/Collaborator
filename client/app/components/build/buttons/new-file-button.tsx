import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRecoilState } from "recoil";
import { Files } from "@/states/state";

const NewFileButton = () => {
  const [inputVal, setInputValue] = useState<string>("");
  const [files, setFiles] = useRecoilState(Files);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  const addFile = () => {
    setFiles([...files, {
      id: uuid(),
      name : inputVal
    }])
  }
  return (
    <Dialog>
      <DialogTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <FaPlus size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>New File</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create File </DialogTitle>
          <DialogDescription>
            <Input onChange={handleChange}/>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>* Must be of .html, .css or .js extension</DialogFooter>
        <DialogClose>
          <Button onClick={addFile} className="w-full">Save</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default NewFileButton;
