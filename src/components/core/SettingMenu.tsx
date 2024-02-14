import { useNavigate } from "react-router-dom";
import {
  Cog6ToothIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Logout from "./Logout";
const SettingMenu = () => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="cursor-pointer hover:bg-gray-100 hover:scale-150 h-8 w-8 flex items-center justify-center rounded-full dark:hover:bg-slate-50">
          <Cog6ToothIcon className="w-6 h-6 dark:hover:text-black" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 w-full hover:cursor-pointer">
              <WrenchScrewdriverIcon className="w-6 h-6" />
              <span className="text-base">My Account </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              className="flex items-center gap-2  w-full hover:cursor-pointer"
              onClick={() => navigate("/change-password")}
            >
              <PencilSquareIcon className="w-6 h-6" />
              <span className="text-base">Change Password </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingMenu;
