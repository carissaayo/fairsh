import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import GadgetsList from "./GadgetsList";
import { useRetailerPage } from "../../context/Retailers/getRetailerPage";
import CustomersList from "./CustomersList";
import SalesList from "./SalesList";

const Header = ({
  searchWord,
  search,
}: {
  searchWord: string;
  title: string;
  search?: boolean;
  owner?: boolean;
}) => {
  const gadgets = useRetailerPage((state) => state.gadgets);
  const customers = useRetailerPage((state) => state.retailersCustomers);
  const sales = useRetailerPage((state) => state.retailersSales);

  return (
    <div className="w-full mb-10 lg:mb-0 overflow-hidden">
      <Tabs defaultValue="gadgets" className="w-full ">
        <TabsList className="mb-8">
          <TabsTrigger value="gadgets" className="text-xl">
            Gadgets ({gadgets?.length})
          </TabsTrigger>
          <TabsTrigger value="customers" className="text-xl">
            Customers ({customers?.length})
          </TabsTrigger>
          <TabsTrigger value="sales" className="text-xl">
            Sales ({sales?.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="gadgets">
          <GadgetsList />
        </TabsContent>
        <TabsContent value="customers" className=" w-full">
          <CustomersList />
        </TabsContent>
        <TabsContent value="sales">
          <SalesList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Header;
