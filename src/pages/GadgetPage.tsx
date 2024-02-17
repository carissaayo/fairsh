import { useLocation, useNavigate } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";

const GadgetPage = () => {
  const {
    state: { gadget },
  } = useLocation();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <main className="w-full h-full pt-8 px-8 overflow-y-scroll mb-40">
      <div className="w-full flex justify-between items-center mb-10">
        <Button
          variant="ghost"
          className="text-lg hover:bg-transparent"
          onClick={goBack}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      <main className="px-12">
        {/* Images Con */}
        <section className="px- flex justify-between h-[600px] gap-8 mb-20">
          <div className="flex-1 h-full">
            <img src={gadget?.picture[0]} alt="" className="h-[600px] w-full" />
          </div>
          <div className="flex flex-col gap-6 flex-1 h-[600px]">
            <div className="">
              <img
                src={gadget?.picture[1]}
                alt=""
                className="h-[285px] w-full"
              />
            </div>
            <div className="">
              <img
                src={gadget?.picture[2]}
                alt=""
                className="h-[285px] w-full"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="w-full mb-10">
            <p className=" mb-6 font-normal text-2xl">
              Store Name:
              <span className="font-bold ml-4">{gadget?.storeId.name}</span>
            </p>
            <p className=" mb-2 text-xl">
              Gadget's Brand:
              <span className="font-bold  ml-4">{gadget?.brandId.name}</span>
            </p>
            <p className=" mb-2 text-xl">
              Vendor's Price:
              <span className="font-bold  ml-4">{gadget?.vendorPrice}</span>
            </p>
          </div>

          <div className="w-full flex items-center justify-between mb-10 ">
            <p className="capitalize font-bold text-2xl">{gadget?.name}</p>
            <p className="capitalize font-bold text-4xl">
              #{gadget?.resalePrice}.00
            </p>
          </div>

          <div className="w-full flex items-center justify-between mb-10 ">
            <p className="font-normal text-xl">
              Quantity:
              <span className="font-bold ml-8">{gadget?.quantity}</span>
            </p>
            <p className="font-normal text-xl">
              Active:
              <span className="font-bold ml-8">
                {" "}
                {gadget?.isActive ? "Yes" : "No"}
              </span>
            </p>
            <p className="font-normal text-xl">
              Negotiable:
              <span className="font-bold ml-8">
                {" "}
                {gadget?.negotiable ? "Yes" : "No"}
              </span>
            </p>
            {gadget?.gadgetCondition === "Used" ? (
              <p className="text-red-600  border px-2 border-red-600 ">USED</p>
            ) : (
              <p className="text-[#0CFC07] border px-2 border-[#0CFC07]   hover:bg-transparent ">
                "NEW"
              </p>
            )}
          </div>
          <div className="mb-40">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-2xl hover:no-underline">
                  Gadget Description
                </AccordionTrigger>
                <AccordionContent className="text-xl font-normal">
                  {gadget?.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </main>
  );
};

export default GadgetPage;
