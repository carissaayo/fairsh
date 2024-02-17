import { useRetailerPage } from "../../context/Retailers/getRetailerPage";
import PaginationCon from "../Pagination";
import ShowToaster from "../core/ShowToaster";
import CustomersTable from "./CustomersTable";

import SaleCard from "./SaleCard";

const SalesList = () => {
  const sales = useRetailerPage((state) => state.retailersSales);
  const setPaginatedSales = useRetailerPage((state) => state.setPaginatedSales);
  const pageCount = useRetailerPage((state) => state.pageCount);
  const setPageCount = useRetailerPage((state) => state.setPageCount);
  const loading = useRetailerPage((state) => state.loading);
  console.log(sales);

  return (
    <main className="w-full h-full px-4 mb-0 ">
      <section className="">
        {!loading && sales.length > 0 && (
          <div className=" w-full mb-10 ">
            <CustomersTable isSales />
          </div>
        )}
      </section>
      {!loading && sales.length === 0 && (
        <div className="flex w-full  justify-center mb ">
          <p className="text-xl">This retailer has no sales yet</p>
        </div>
      )}
      <section className="">
        {" "}
        <PaginationCon
          itemsPerPage={15}
          items={sales}
          setItems={setPaginatedSales}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
      </section>
      <ShowToaster />
    </main>
  );
};

export default SalesList;
