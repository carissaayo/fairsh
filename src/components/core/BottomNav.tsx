import {
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import MobileNavItem from "./MobileNavItem";

const BottomNav = ({ open }: { open: () => void }) => {
  return (
    <div
      className="flex h-[80px] lg:hidden w-full border-r border-black border-opacity-20  items-center justify-between sm:gap-6 bg-white   sticky bottom-0 z-20  dark:border-opacity-0  dark:bg-black"
      onClick={open}
    >
      <MobileNavItem Icon={BuildingStorefrontIcon} title="/" />
      <MobileNavItem Icon={CurrencyDollarIcon} title="Loans" />
      <MobileNavItem Icon={BanknotesIcon} title="Payments" />
      <MobileNavItem Icon={Cog6ToothIcon} title="account" />
    </div>
  );
};

export default BottomNav;
