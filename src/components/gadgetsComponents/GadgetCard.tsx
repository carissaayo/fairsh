import { NavLink } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import gadgetImg from "../../assets/images/gadget.jpg";

const GadgetCard = () => {
  return (
    <NavLink to="/gadgets/:id" className="w-full ">
      <Card>
        <CardHeader>
          <img
            src={gadgetImg}
            alt="retailer"
            className="h-[130px] sm:h-[200px] md:h-[250px] xl:h-[300px]"
          />
        </CardHeader>
        <CardContent className="flex items-center flex-col sm:flex-row justify-between">
          <p className="text-[#0CFC07] sm:hidden border px-2 border-[#0CFC07]   hover:bg-transparent ">
            NEW
          </p>
          <div className="">
            <CardTitle className="mb-1 sm:mb-4 text-base sm:text-2xl">
              Iphone 13 pro
            </CardTitle>
            <CardDescription className="text-lg font-semibold text-black dark:text-white">
              #200,000.00
            </CardDescription>
          </div>
          <p className="text-[#0CFC07] border-[#0CFC07] hover:bg-transparent hover:text-[#0CFC07] hidden sm:block">
            NEW
          </p>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default GadgetCard;
