import { NavLink } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import retailerImg from "../../assets/images/retailer.jpg";
import { Button } from "../ui/button";

const RetailerCard = () => {
  return (
    <NavLink to="/retailer" className="flex-1">
      <Card>
        <CardHeader>
          <img src={retailerImg} alt="retailer" className=" h-[300px]" />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-4">Omolo Omobo</CardTitle>
          <CardDescription className="text-lg font-semibold text-black">
            20 Gadgets
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full border-[#FBBD85] border-opacity-40 text-[#F87E0D] hover:border hover:border-[#FBBD85] hover:bg-[#FBBD85] hover:bg-opacity-20 "
          >
            Visit Store
          </Button>
        </CardFooter>
      </Card>
    </NavLink>
  );
};

export default RetailerCard;
