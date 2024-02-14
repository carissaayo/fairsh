import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

const DropdownMenuCon = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" flex items-center justify-center">
          <EllipsisHorizontalIcon className="w-6 h-6 cursor-pointer " />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Operations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <EditUser />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DeleteUser />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCon;
