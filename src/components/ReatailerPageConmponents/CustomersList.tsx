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
    <main className="w-full h-full px-4 mb-0">
      <section className="">
        <div className=" w-full mb-10 ">
          {customers.length > 0 && <CustomersTable isSales />}
        </div>
      </section>
      {!loading && customers.length === 0 && (
        <div className="flex w-full  justify-center ">
          <p className="text-xl">This retailer has no customer yet</p>
        </div>
      )}
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
      <ShowToaster />
    </main>
  );
};

export default CustomersList;
