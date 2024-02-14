import {
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  ArrowLeftEndOnRectangleIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import noImg from "../../assets/images/noImg.jfif";

const SideNav = () => {
  return (
    <div className=" border-r border-black border-opacity-5  hidden lg:block bg-[#e9d3be]    w-[20%] pt-6  rounded-l-xl">
      <div className=" ">
        <div className="pl-8">
          <Link to="/">
            <h1 className="text-4xl text-[#F87E0D] font-bold">FairShop</h1>
          </Link>
        </div>
        <div className=" w-full flex flex-col items-center justify-start pt-6 gap-4  min-h-[430px]">
          <NavItem Icon={BuildingStorefrontIcon} title="/" href="/" />
          {/* <NavItem Icon={UserGroupIcon} title="retailers" href="retailers" />/ */}

          <NavItem Icon={CurrencyDollarIcon} title="Loans" href="loans" />
          <NavItem Icon={BanknotesIcon} title="Payments" href="payments" />

          {/* <NavItem Icon={UserIcon} title="users" href="users" /> */}
        </div>
        <div className="w-full flex items-center justify-end flex-col ">
          <NavItem
            Icon={Cog6ToothIcon}
            title="Manage Account"
            href="account"
            subnav
          />
          <NavItem
            Icon={PencilSquareIcon}
            title="Change Password"
            href="change-password"
            subnav
          />

          <Link
            to="manage-account"
            className={` 
                   flex gap-4 items-center w-[85%] h-14 rounded-xl border border-[#FBBD85] bg-[#F87E0D] mb-6 px-5  text-white
              `}
          >
            <img
              src={noImg}
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div className="">
              <p className="font-bold">John Doe</p>
              <p className="text-sm font-normal">Admin</p>
            </div>
            <div className="w-[30px]  flex items-center justify-center h-[30px]  ">
              <ChevronRightIcon className="w-6 h-6 text-black" />
            </div>
          </Link>
          <NavItem Icon={ArrowLeftEndOnRectangleIcon} title="Logout" subnav />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
