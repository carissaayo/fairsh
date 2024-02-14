import { useRetailerPage } from "../../context/Retailers/getRetailerPage";
import PaginationCon from "../Pagination";
import ShowToaster from "../core/ShowToaster";
import CustomersTable from "./CustomersTable";

const CustomersList = () => {
  const customers = useRetailerPage((state) => state.retailersCustomers);
  const setPaginatedCustomers = useRetailerPage(
    (state) => state.setPaginatedCustomers
  );
  const pageCount = useRetailerPage((state) => state.pageCount);
  const setPageCount = useRetailerPage((state) => state.setPageCount);
  const loading = useRetailerPage((state) => state.loading);

  return (
    <main className="w-full h-full px-4 mb-40 ">
      <section className="">
        <div className=" w-full mb-10 ">
          {customers.length > 0 && <CustomersTable isSales />}
        </div>
        <ShowToaster />

        <section className="">
          {" "}
          <PaginationCon
            itemsPerPage={15}
            items={customers}
            setItems={setPaginatedCustomers}
            pageCount={pageCount}
            setPageCount={setPageCount}
          />
        </section>
      </section>
      {!loading && customers.length === 0 && (
        <div className="flex w-full  justify-center mb-56">
          <p className="text-xl">This retailer has no customer</p>
        </div>
      )}
    </main>
  );
};

export default CustomersList;
