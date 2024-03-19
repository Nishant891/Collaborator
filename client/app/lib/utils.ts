import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  const performNavigation = (route : string) => {
    navigate(route);
  }
  return {performNavigation}
} 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


