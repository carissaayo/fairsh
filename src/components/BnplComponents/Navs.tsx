import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from "../ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
const Navs = () => {
  const [active, setActive] = useState("Pending");

  return (
    <main className=" h-[140px] sm:h-[135px]">
      <ScrollArea>
        <section className="w-full flex items-center gap-2 sm:gap-6 mb-4 pl-4 sm:pl-20  border-opacity-10 relative">
          {/* Pending Menu */}
          <div className="flex items-center gap-4">
            <div
              className={`p-4 cursor-pointer  ${
                active === "Pending" && "border-b-2 border-[#F87E0D] font-bold "
              }`}
              onClick={() => setActive("Pending")}
            >
              <p className="sm:text-lg ">Pending (20)</p>
            </div>
            <div
              className={`p-4 cursor-pointer  ${
                active === "Ongoing" &&
                "border-b-2  border-[#F87E0D] font-bold "
              }`}
              onClick={() => setActive("Ongoing")}
            >
              <p className="sm:text-lg ">Ongoing (20)</p>
            </div>

            <div
              className={`p-4 cursor-pointer  ${
                active === "Completed" &&
                "border-b-2 border-[#F87E0D] font-bold "
              }`}
              onClick={() => setActive("Completed")}
            >
              <p className="sm:text-lg ">Completed (20)</p>
            </div>
          </div>
        </section>
        <section className="min-w-[505px] w-full px-4 sm:px-20">
          <div
            className={` w-full gap-8 ${
              active === "Pending" ? "flex" : "hidden"
            }`}
          >
            <p className="py-4  cursor-pointer"> Awaiting Approval (2)</p>
            <p className="py-4 cursor-pointer"> Awaiting Enrollment (2)</p>
            <p className="py-4 cursor-pointer"> Rejected (2)</p>
          </div>
          <div
            className={` w-full gap-8  ${
              active === "Ongoing" ? "flex" : "hidden"
            }`}
          >
            <p className="py-4  cursor-pointer"> All (2)</p>
            <p className="py-4 cursor-pointer"> Payment Due (2)</p>
          </div>
        </section>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </main>
  );
};

export default Navs;
