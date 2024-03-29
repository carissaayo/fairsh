import {
  BuildingStorefrontIcon,
  ArrowLeftEndOnRectangleIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  ChevronRightIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import noImg from "../../assets/images/noImg.jfif";
import { useLoginStore } from "../../context/auth/loginStore";

const SideNav = () => {
  const user = useLoginStore((state) => state.user);
  console.log(user);

  return (
    <div className=" border-r border-black border-opacity-5  hidden lg:block bg-[#e9d3be]     min-w-[270px] 2xl:w-[20%] pt-6  rounded-l-xl">
      <div className=" ">
        <div className="pl-8">
          <Link to="/">
            <h1 className="text-4xl text-[#F87E0D] font-bold">FairShop</h1>
          </Link>
        </div>
        <div className=" w-full flex flex-col items-center justify-start pt-6 gap-4  min-h-[600px]">
          <NavItem Icon={BuildingStorefrontIcon} title="/" href="/" />

          <NavItem Icon={CurrencyDollarIcon} title="Loans" href="loans" />
          <NavItem Icon={BanknotesIcon} title="Payments" href="payments" />
          {!user.profile.fintechPartner && (
            <>
              <NavItem
                Icon={UserGroupIcon}
                title="retailers"
                href="retailers"
              />
              <NavItem
                Icon={DevicePhoneMobileIcon}
                title="gadgets"
                href="gadgets"
              />
            </>
          )}
        </div>
        <div className="w-full flex items-center justify-end flex-col ">
          <Link
            to="account"
            className={` 
                   flex gap-4 items-center w-[85%] h-14 rounded-xl border border-[#FBBD85] bg-[#F87E0D] mb-6 px-2  text-white
              `}
          >
            <img
              src={noImg}
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div className="">
              <p className="font-bold">{user?.profile.fullName}</p>
              <p className="text-sm font-normal">
                {user?.profile.adminId && "Admin"}
              </p>
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
