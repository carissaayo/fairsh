import { NavLink } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import gadgetImg from "../assets/images/gadget.jpg";
import { RetailerCustomer } from "../../lib/types";

const CustomerCard = ({ customer }: { customer: RetailerCustomer }) => {
  const { storeId, name } = customer;
  return (
    <NavLink
      to={`/retailer/${storeId}`}
      state={{ customer }}
      className="w-full xs:w-[85%] sm:w-full"
    >
      <Card>
        <CardHeader>
          {/* <img
            src={picture[0] ?? gadgetImg}
            alt="retailer"
            className="object-cover h-[250px] xs:h-[200px] md:h-[250px] xl:h-[300px]"
          /> */}
        </CardHeader>
        <CardContent className="flex items-center flex-col sm:flex-row justify-between">
          <div className="">
            <CardTitle className="mb-4">{name}</CardTitle>
            <CardDescription className="text-2xl font-semibold text-black dark:text-white">
              {/* #{resalePrice} */}
            </CardDescription>
          </div>
          {/* {gadgetCondition === "Used" ? (
            <p className="text-red-600  border px-2 border-red-600 ">USED</p>
          ) : (
            <p className="text-[#0CFC07] border px-2 border-[#0CFC07]   hover:bg-transparent ">
              "NEW"
            </p>
          )} */}
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default CustomerCard;
