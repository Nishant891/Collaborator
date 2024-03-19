import { Button } from "@/components/ui/button"
import { FaSave } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SaveButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline"><FaSave size={18}/></Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Save files</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SaveButton
