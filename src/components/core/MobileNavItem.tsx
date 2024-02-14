import { Link, useLocation } from "react-router-dom";

type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
  React.RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
  title?: string;
  titleId?: string;
};

type IconType = React.FC<IconProps>;
const MobileNavItem = ({ Icon, title }: { title: string; Icon: IconType }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={`${title}`}
      className={` flex flex-col items-center   rounded-full   w-full gap-2 px-4   ${
        (pathname !== "/" ? pathname.slice(1) : pathname) === title
          ? " bg-opacity-40 text-[#F87E0D]"
          : " hover:scale-110 "
      }`}
    >
      <Icon className="w-6 h-6" />
      <h1 className="capitalize text-sm">
        {title === "/" ? "Dashboard" : title}
      </h1>
    </Link>
  );
};
export default MobileNavItem;
