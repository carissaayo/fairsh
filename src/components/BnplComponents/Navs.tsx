import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useBnplStore } from "../../context/Bnpl/getBnpl";
const Navs = () => {
  const setFilterTerm = useBnplStore((state) => state.setFilterTerm);
  const setFiltered = useBnplStore((state) => state.setFiltered);
  const bnplAnalytics = useBnplStore((state) => state.bnplsAnalytics);
  const setActive = useBnplStore((state) => state.setActive);
  const active = useBnplStore((state) => state.active);
  const bnplsTotal = useBnplStore((state) => state.bnplsTotal);

  const handleActive = (act: string) => {
    setFilterTerm(act);
    setFiltered(true);
  };
  return (
    <main className=" h-[140px] sm:h-[135px]">
      <ScrollArea>
        <section className="w-full flex items-center gap-2 sm:gap-6 mb-4 pl-4 sm:pl-20  border-opacity-10 relative">
          {/* Pending Menu */}
          <div className="flex items-center gap-4">
            <div
              className={`p-4 cursor-pointer  ${
                active === "All" && "border-b-2 border-[#F87E0D] font-bold "
              }`}
              onClick={() => {
                setActive("All");
                handleActive("All");
              }}
            >
              <p className="sm:text-lg ">All ({bnplsTotal})</p>
            </div>
            <div
              className={`p-4 cursor-pointer  ${
                active === "Pending" && "border-b-2 border-[#F87E0D] font-bold "
              }`}
              onClick={() => setActive("Pending")}
            >
              <p className="sm:text-lg ">
                Pending (
                {bnplAnalytics
                  .filter(
                    (data) =>
                      data._id === "Awaiting Aprroval" ||
                      "Awaiting Enrollment" ||
                      "Rejected"
                  )
                  .reduce((a, b) => a + b.count, 0)}
                )
              </p>
            </div>
            <div
              className={`p-4 cursor-pointer  ${
                active === "Ongoing" &&
                "border-b-2  border-[#F87E0D] font-bold "
              }`}
              onClick={() => setActive("Ongoing")}
            >
              <p className="sm:text-lg ">
                Ongoing ({" "}
                {bnplAnalytics.filter((data) => data._id === "Approved")[0]
                  ?.count ?? 0}
                )
              </p>
            </div>

            <div
              className={`p-4 cursor-pointer  ${
                active === "Completed" &&
                "border-b-2 border-[#F87E0D] font-bold "
              }`}
              onClick={() => {
                handleActive("Completed");
                setActive("Completed");
              }}
            >
              <p className="sm:text-lg ">
                Completed ({" "}
                {bnplAnalytics.filter((data) => data._id === "Completed")[0]
                  ?.count ?? 0}
                )
              </p>
            </div>
          </div>
        </section>
        <section className="min-w-[505px] w-full px-4 sm:px-20">
          <div
            className={` w-full gap-8 ${
              active === "Pending" ? "flex" : "hidden"
            }`}
          >
            <p
              className="py-4  cursor-pointer"
              onClick={() => handleActive("Awaiting Approval")}
            >
              {" "}
              Awaiting Approval (2)
            </p>
            <p
              className="py-4 cursor-pointer"
              onClick={() => handleActive("Awaiting Enrollment")}
            >
              {" "}
              Awaiting Enrollment (
              {bnplAnalytics.filter(
                (data) => data._id === "Awaiting Enrollment"
              )[0]?.count ?? 0}
              )
            </p>
            <p
              className="py-4 cursor-pointer"
              onClick={() => handleActive("Rejected")}
            >
              {" "}
              Rejected (
              {bnplAnalytics.filter((data) => data._id === "Rejected")[0]
                ?.count ?? 0}
              )
            </p>
          </div>
          <div
            className={` w-full gap-8  ${
              active === "Ongoing" ? "flex" : "hidden"
            }`}
          >
            <p
              className="py-4  cursor-pointer"
              onClick={() => handleActive("Approved")}
            >
              {" "}
              All ({" "}
              {bnplAnalytics.filter((data) => data._id === "Approved")[0]
                ?.count ?? 0}
              )
            </p>
            <p className="py-4 cursor-pointer"> Payment Due (2)</p>
          </div>
        </section>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </main>
  );
};

export default Navs;
