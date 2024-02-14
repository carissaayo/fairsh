import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from "../ui/dropdown-menu";
const Navs = () => {
  const [position, setPosition] = useState("bottom");
  const [active, setActive] = useState("");

  return (
    <section className="w-full flex items-center h-10 gap-6 mb-10 pl-20 border-b border-opacity-10 py-8">
      {/* Pending Menu */}
      <div className="">
        <DropdownMenu onOpenChange={() => setActive("Pending")}>
          <DropdownMenuTrigger
            asChild
            //   onClick={() => setActive("Pending")}
          >
            <div
              className={` h-8 pb-4 cursor-pointer  ${
                active === "Pending" && "border-b-2 border-[#F87E0D] font-bold "
              }`}
            >
              <p className="text-lg ">Pending</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full h-20 px-8  flex items-center">
            {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
              className="flex gap-3 items-center w-full text-lg font-normal"
            >
              <DropdownMenuItem
                // value="Awaiting Approval"
                className=" cursor-pointer"
              >
                Awaiting Approval(2)
              </DropdownMenuItem>
              <DropdownMenuItem
                // value="Awaiting Enrollment "
                className=" cursor-pointer"
              >
                Awaiting Enrollment(2)
              </DropdownMenuItem>
              <DropdownMenuItem
                // value="Rejected"
                className=" cursor-pointer"
              >
                Rejected(2)
              </DropdownMenuItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="">
        <DropdownMenu onOpenChange={() => setActive("Ongoing")}>
          <DropdownMenuTrigger asChild>
            <div
              className={` h-8 pb-4 cursor-pointer ${
                active === "Ongoing" && "border-b-2 border-[#F87E0D] font-bold"
              }`}
            >
              <p className="text-lg">Ongoing</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full h-20 px-8  flex items-center">
            {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
              className="flex gap-3 items-center w-full text-lg font-normal"
            >
              <DropdownMenuItem
                // value="Awaiting Approval"
                className=" cursor-pointer"
              >
                All(20)
              </DropdownMenuItem>
              <DropdownMenuItem
                // value="Awaiting Enrollment "
                className=" cursor-pointer"
              >
                Payment Due(12)
              </DropdownMenuItem>
              <DropdownMenuItem
                // value="Rejected"
                className=" cursor-pointer"
              >
                Rejected(2)
              </DropdownMenuItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div
        onClick={() => setActive("Completed")}
        className={` h-8 pb-4 cursor-pointer ${
          active === "Completed" && "border-b-2 border-[#F87E0D] font-bold"
        }`}
      >
        <p className="text-lg">Completed</p>
      </div>
    </section>
  );
};

export default Navs;
