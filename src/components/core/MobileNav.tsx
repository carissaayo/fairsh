import { useNavigate } from "react-router-dom";
import {
  BellIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import Logout from "./Logout";
import userAvatar from "../../assets/images/user-avatar.jpg";
import { ModeToggle } from "../ModeToggler";
import { useTheme } from "../ThemeProvider";
import { useLoginStore } from "../../context/auth/loginStore";

const MobileNav = ({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: (openNav: boolean) => void;
}) => {
  const user = useLoginStore((state) => state.user);

  const { setTheme, theme } = useTheme();

  const navigate = useNavigate();
  const goTo = (url: string) => {
    setOpenNav(false);
    navigate(url);
  };
  const ChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <section
      className={`flex lg:hidden flex-col items-center justify-center w-[85%] md:w-[60%] absolute  bg-white border  top-[70px] pt-8 z-10 rounded-b-md gap-8 right-8 transition-display duration-300   dark:border-[#F87E0D] dark:border-opacity-40  dark:bg-black ${
        !openNav && "h-0 hidden "
      }`}
    >
      <div className="flex items-center gap-6 w-full border-b border-opacity-20  h-[30px] pb-8 pl-6">
        <div className="h-10 w-10 rounded-full ">
          <img src={userAvatar} alt="user-avatar" className="rounded-full" />
        </div>
        <p className="text-lg">{user && user.profile.fullName}</p>
      </div>
      <div className="flex items-center gap-6 w-full hover:cursor-pointer border-b border-opacity-20  h-[30px]  pb-8 pl-6">
        <WrenchScrewdriverIcon className="w-8 h-8" />
        <span className="text-lg">Manage Account </span>
      </div>
      <div
        className="flex items-center gap-6 w-full hover:cursor-pointer border-b border-opacity-20  h-[30px]  pb-8 pl-6"
        onClick={ChangeTheme}
      >
        <ModeToggle />
        <span className="text-lg">Change Theme </span>
      </div>
      {/* <hr className="" /> */}
      <div className="flex items-center gap-6 w-full hover:cursor-pointer border-b border-opacity-20 h-[30px] pb-8 pl-6">
        <BellIcon className="w-8 h-8" />
        <span className="text-lg">Notifications </span>
      </div>
      <div
        className="flex items-center gap-6  w-full hover:cursor-pointer border-b border-opacity-20  h-[30px]  pb-8 pl-6"
        onClick={() => goTo("/change-password")}
      >
        <PencilSquareIcon className="w-8 h-8" />
        <span className="text-lg">Change Password </span>
      </div>
      <Logout mobile />
    </section>
  );
};

export default MobileNav;
