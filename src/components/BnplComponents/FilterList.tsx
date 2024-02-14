import { useBnplStore } from "../../context/Bnpl/getBnpl";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const FilterList = () => {
  // const filterTerm = useBnplStore((state) => state.filterTerm);
  const setFilterTerm = useBnplStore((state) => state.setFilterTerm);
  const setFiltered = useBnplStore((state) => state.setFiltered);
  const bnplAnalytics = useBnplStore((state) => state.bnplsAnalytics);

  return (
    <div className="mb-8">
      <ToggleGroup
        type="single"
        className="flex flex-wrap"
        onValueChange={(value) => {
          setFilterTerm(value);
          setFiltered(true);
          console.log(value);
        }}
      >
        {/* {bnplAnalytics.length > 0 &&
          bnplAnalytics.map((data) => (
            <ToggleGroupItem value={data._id} className="">
              {data._id === "Approved"
                ? "Ongoing"
                : data._id === "Awaiting Enrollment"
                ? "Pending "
                : data._id}
              ( {data.count})
            </ToggleGroupItem>
          ))} */}
        <ToggleGroupItem value="Approved" className="">
          Ongoing (
          {bnplAnalytics.filter((data) => data._id === "Approved")[0]?.count ??
            0}
          )
        </ToggleGroupItem>
        {/* <ToggleGroupItem value="" className="">
          Payment due (0)
        </ToggleGroupItem> */}
        <ToggleGroupItem value="Awaiting Approval" className="">
          Awaiting Approval (
          {bnplAnalytics.filter((data) => data._id === "Awaiting Approval")[0]
            ?.count ?? 0}
          )
        </ToggleGroupItem>
        <ToggleGroupItem value="Awaiting Enrollment" className="">
          Awaiting Enrollment (
          {bnplAnalytics.filter((data) => data._id === "Awaiting Enrollment")[0]
            ?.count ?? 0}
          )
        </ToggleGroupItem>
        <ToggleGroupItem value="Completed" className="">
          Completed (
          {bnplAnalytics.filter((data) => data._id === "Completed")[0]?.count ??
            0}
          )
        </ToggleGroupItem>
        <ToggleGroupItem value="Rejected" className="">
          Rejected (
          {bnplAnalytics.filter((data) => data._id === "Rejected")[0]?.count ??
            0}
          )
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default FilterList;
