import { Bars, ColorRing } from "react-loader-spinner";
import { useQueryClient } from "@tanstack/react-query";
import PaymentTable from "../components/PaymentComponents/PaymentTable";
import ShowToaster from "../components/core/ShowToaster";

import { useBnplStore } from "../context/Bnpl/getBnpl";

import PaginationCon from "../components/Pagination";

import SummaryTable from "../components/BnplComponents/SummaryTable";
import { useUserProfileStore } from "../context/auth/getProfile";
import { Navigate } from "react-router-dom";
import { useLoginStore } from "../context/auth/loginStore";

const Bnpl = () => {
  const queryClient = useQueryClient();

  const loading = useBnplStore((state) => state.loading);
  const setPaginatedBnpls = useBnplStore((state) => state.setPaginatedBnpl);
  const bnpls = useBnplStore((state) => state.bnpls);

  const pageCount = useBnplStore((state) => state.pageCount);
  const setPageCount = useBnplStore((state) => state.setPageCount);
  const profile = useLoginStore((state) => state.user.profile);

  if (!profile.emailVerified) {
    return <Navigate to="/account" />;
  }

  return (
    <main className="w-full h-full   overflow-x-hidden overflow-y-scroll mb-52 xxl:mb-40 bg-white pt-8">
      {loading ? (
        <div className="w-full flex items-center justify-center flex-1 h-full ">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <>
          <section className="w-full mb-32 px-4 xs:px-8">
            {/* <MainCon /> */}
            <section className="flex flex-col xxl:flex-row gap-8">
              <SummaryTable />
              <PaymentTable />
            </section>

            <section className="">
              {" "}
              <PaginationCon
                itemsPerPage={10}
                items={bnpls}
                setItems={setPaginatedBnpls}
                pageCount={pageCount}
                setPageCount={setPageCount}
              />
            </section>
          </section>
          <ShowToaster />
        </>
      )}
    </main>
  );
};

export default Bnpl;
