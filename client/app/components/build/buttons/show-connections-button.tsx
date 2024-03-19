import { Button } from "@/components/ui/button"
import { IoPeopleSharp } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Connection } from "@/states/state";
import { useRecoilValue } from "recoil";

const ShowConnectionButton = () => {
  const isConnected = useRecoilValue(Connection);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button disabled={!isConnected} variant="outline"><IoPeopleSharp size={18}/></Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Show Connection</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ShowConnectionButton
