import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  BellIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ModeToggle } from "../ModeToggler";
import MobileNav from "./MobileNav";

import userAvatar from "../../assets/images/user-avatar.jpg";

const TopNav = ({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: (nav: boolean) => void;
}) => {
  return (
    <main
      className={`w-full h-20 border-b  border-black border-opacity-5 flex lg:hidden items-center px-4 justify-between overflow-hidden bg-[#EFF6E0] bg-opacity-20 dark:border-[#F87E0D] dark:border-opacity-40  dark:bg-black`}
    >
      <div className="">
        <Link to="/">
          <h1 className="text-4xl text-[#F87E0D] font-bold">FairShop</h1>
        </Link>
      </div>
      <section className="hidden lg:flex items-center justify-end gap-16 xl:gap-28">
        {/* Input con */}
        <div className=" ">
          <div className="flex items-center gap-1 border dark:border-white border-black border-opacity-30 px-4 rounded-xl w-64 xl:w-96 justify-between h-12">
            <input
              type="text"
              className="p-6  focus:outline-none w-full bg-transparent dark:placeholder:text-white"
              placeholder="Search"
            />
            <span className="hover:cursor-pointer">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Avatar & Icons con */}
        <div className=" flex-1 flex items-center gap-4 justify-end ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent className="bg-none">
                <p>change theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="cursor-pointer hover:bg-gray-100 hover:scale-150 h-8 w-8 flex items-center justify-center rounded-full dark:hover:bg-slate-50">
                  <BellIcon className="w-6 h-6 dark:hover:text-black" />
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-none">
                <p> notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* <SettingMenu /> */}

          <div className="h-10 w-10 rounded-full hover:cursor-pointer">
            <img src={userAvatar} alt="user-avatar" className="rounded-full" />
          </div>
        </div>
      </section>
      {/* Mobile Nav */}
      <div className="lg:hidden">
        <div className="border border-opacity-50 w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer">
          {openNav ? (
            <AdjustmentsVerticalIcon
              className="h-8 w-8"
              onClick={() => setOpenNav(false)}
            />
          ) : (
            <AdjustmentsHorizontalIcon
              className="h-8 w-8"
              onClick={() => setOpenNav(true)}
            />
          )}
        </div>
      </div>
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
    </main>
  );
};

export default TopNav;
