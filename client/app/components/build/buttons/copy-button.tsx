import { Button } from "@/components/ui/button"
import { FaCopy } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useRecoilValue } from "recoil";
import { Connection } from "@/states/state";

const CopyButton = () => {
  const isConnected = useRecoilValue(Connection);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button disabled={!isConnected} variant="outline"><FaCopy size={18}/></Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy room ID</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CopyButton
