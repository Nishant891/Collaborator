import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Connection } from "@/states/state";
import { useRecoilState } from "recoil";
import { useToast } from "@/components/ui/use-toast"

const ConnectionSwitch = () => {
  const { toast } = useToast()
  const [isConnected, setIsConnected] = useRecoilState(Connection);
  const handleChange = () => {
    setIsConnected(!isConnected);
  }
  const handleClick = () => {
    toast({
      title: `${!isConnected ? "Connection Created" : "Connection Closed"}`,
      description: `${!isConnected ? "Copy RoomID" : ""}`
    })
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-2">
            <Switch onClick={handleClick} onCheckedChange={handleChange}/>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Create Connection</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ConnectionSwitch;
