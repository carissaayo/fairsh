import { NavLink } from "react-router-dom";
import noImg from "../../assets/images/noImg.jfif";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Button } from "../ui/button";
import { Retailer } from "../../lib/types";

const RetailerCard = ({ retailer }: { retailer: Retailer }) => {
  const { picture, state, name, _id } = retailer;
  return (
    <NavLink to={`/retailers/${_id}`} state={{ retailer }} className=" w-full">
      <Card>
        <CardHeader>
          <img
            src={picture[0] ?? noImg}
            alt="retailer"
            className="object-cover  h-[130px] sm:h-[200px] md:h-[250px] xl:h-[300px] "
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-4">{name}</CardTitle>
          <CardDescription className="text-lg font-semibold text-black dark:text-white">
            {state}
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
