import { NavLink } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import gadgetImg from "../assets/images/gadget.jpg";
import { RetailerGadget } from "../lib/types";

const GadgetCard = ({ gadget }: { gadget: RetailerGadget }) => {
  const {
    _id,
    name,
    resalePrice,
    picture,
    gadgetCondition,
    isActive,
    brandId,
    isFairshop,
  } = gadget;
  return (
    <NavLink
      to={`/gadgets/${_id}`}
      state={{ gadget }}
      className="w-full xs:w-[85%] sm:w-full"
    >
      <Card>
        <CardHeader>
          <img
            src={picture[0] ?? gadgetImg}
            alt="retailer"
            className="object-cover h-[250px] xs:h-[200px] md:h-[250px] xl:h-[300px]"
          />
        </CardHeader>
        <CardContent className="flex items-center flex-col  justify-start">
          <div className="w-full flex justify-start mb-2 items-center gap-4">
            <p className="text-lg font-normal text-green-600">{brandId.name}</p>
            <span className="ml-4 font-normal text-[#F87E0D]">
              {isActive && "active"}
            </span>
            {isFairshop && (
              <p className="text-base font-bold">Fairshop's gadget</p>
            )}
          </div>

          {/* <div className=""> */}
          <CardTitle className="mb-4 flex justify-between w-full">
            <p className="">{name}</p>
          </CardTitle>
          <CardDescription className="w-full">
            <div className="text-2xl font-semibold text-black dark:text-white flex justify-between w-full">
              <p className=""> #{resalePrice}</p>

              {gadgetCondition === "Used" ? (
                <p className="text-red-600 text-base  border px-2 border-red-600 flex items-center justify-center">
                  USED
                </p>
              ) : (
                <p className="text-[#0CFC07]  text-base border px-2 border-[#0CFC07]   hover:bg-transparent items-center justify-center ">
                  "NEW"
                </p>
              )}
            </div>
          </CardDescription>
          {/* </div> */}
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default GadgetCard;
