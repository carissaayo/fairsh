import { Link, useLocation } from "react-router-dom";
import Logout from "./Logout";

type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
  React.RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
  title?: string;
  titleId?: string;
};

type IconType = React.FC<IconProps>;
const NavItem = ({
  Icon,
  title,
  href,
  subnav,
  innerNav,
}: {
  title: string;
  Icon: IconType;
  href?: string;
  subnav?: boolean;
  innerNav?: boolean;
}) => {
  const { pathname } = useLocation();

  return (
    <>
      {href ? (
        <Link
          to={`${href}`}
          className={` flex items-center  h-12   rounded-xl  w-[90%] gap-4 px-4  hover:bg-[#FBBD85] hover:bg-opacity-20  ${
            (pathname !== "/" ? pathname.slice(1) : pathname) === href
              ? "border border-[#F87E0D]  text-[#F87E0D]"
              : " "
          } ${subnav && "mb-4"}`}
        >
          <Icon className="w-6 h-6" />
          <h1
            className={`capitalize  font-medium  ${
              subnav ? "text-base" : "text-lg"
            } ${innerNav ? "text-sm" : ""}`}
          >
            {title === "/" ? "Dashboard" : title}
          </h1>
        </Link>
      ) : (
        <div
          className={` flex items-center  h-12   rounded-xl hover:border hover:border-[#FBBD85] w-[85%] gap-4 px-4  hover:bg-[#FBBD85] hover:bg-opacity-20 cursor-pointer ${
            (pathname !== "/" ? pathname.slice(1) : pathname) === title
              ? "bg-[#FBBD85] bg-opacity-40 text-[#F87E0D]"
              : ""
          }`}
        >
          <Logout subnav />
        </div>
      )}
    </>
  );
};

export default NavItem;
