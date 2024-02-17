import { useRetailerPage } from "../../context/Retailers/getRetailerPage";
import { RetailerGadget } from "../../lib/types";
import GadgetCard from "../GadgetCard";
import PaginationCon from "../Pagination";

const GadgetsList = () => {
  const gadgets = useRetailerPage((state) => state.gadgets);
  const paginatedGadgets = useRetailerPage((state) => state.paginatedGadgets);
  const setPaginatedGadgets = useRetailerPage(
    (state) => state.setPaginatedGadgets
  );
  const setPageNumber = useRetailerPage((state) => state.setPageNumber);
  const setPageCount = useRetailerPage((state) => state.setPageCount);
  const pageCount = useRetailerPage((state) => state.pageCount);
  const loading = useRetailerPage((state) => state.loading);

  return (
    <>
      <section
        className={`w-full flex flex-col items-center justify-center sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6 md:gap-12 xl:gap-8 xs:px-4 sm:px-0 ${
          gadgets.length > 0 && "mb-40"
        }`}
      >
        {!loading &&
          gadgets.length > 0 &&
          paginatedGadgets?.map((gadget) => (
            <GadgetCard key={gadget._id} gadget={gadget} />
          ))}
      </section>
      {!loading && gadgets.length === 0 && (
        <div className="flex w-full  justify-center mb-32">
          <p className="text-xl">This retailer has not added any gadget</p>
        </div>
      )}
      {!loading && gadgets.length > 0 && (
        <section className="w-full flex items-center justify-center">
          <PaginationCon
            itemsPerPage={15}
            items={gadgets}
            setItems={setPaginatedGadgets}
            pageCount={pageCount}
            setPageCount={setPageCount}
          />
        </section>
      )}
    </>
  );
};

export default GadgetsList;
