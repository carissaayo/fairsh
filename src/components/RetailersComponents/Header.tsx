import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRetailersStore } from "../../context/Retailers/getRetailers";

const Header = ({
  retailersNumber,
  loading,
}: {
  retailersNumber: number;
  loading: boolean;
}) => {
  const filterByState = useRetailersStore((state) => state.filterByState);
  const filterByLGA = useRetailersStore((state) => state.filterByLGA);
  const setFilterByLGA = useRetailersStore((state) => state.setFilterByLGA);
  const setFilterByState = useRetailersStore((state) => state.setFilterByState);
  const searchTerm = useRetailersStore((state) => state.searchTerm);
  const setSearchTerm = useRetailersStore((state) => state.setSearchTerm);
  const states = useRetailersStore((state) => state.states);
  const lgas = useRetailersStore((state) => state.lgas);

  const handleState = (e: string) => {
    setFilterByState(e);
    setFilterByLGA("");
  };
  const handleLGA = (e: string) => {
    setFilterByLGA(e);
  };

  return (
    <section className="flex flex-col 2xl:flex-row justify-between items-start 2xl:items-center w-full mb-10 gap-6">
      <div className=" ">
        <h1 className="font-bold text-3xl mb-2 capitalize">
          retailers ({loading ? "loading" : retailersNumber})
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row  sm:items-center w-full justify-between sm:justify-end gap-6  md:gap-16 xl:gap-6 flex-1">
        <div className="flex gap-12 lg:gap-4 justify-start">
          {/* filter by State */}

          <div className=" flex gap-2 justify-start  items-center w-full">
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
            {!loading && (
              <Select
                onValueChange={(e) => handleState(e)}
                defaultValue={filterByState ?? "All"}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue
                    placeholder={
                      filterByState.length > 0 ? filterByState : "State"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  {states.map((state, index) => (
                    <SelectItem value={state} key={index}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          {/* filter by LGA */}

          {lgas[filterByState] && !loading && (
            <div className=" flex gap-4  items-center">
              <AdjustmentsHorizontalIcon className="h-6 w-6" />

              <Select
                onValueChange={(e) => handleLGA(e)}
                defaultValue={filterByLGA ?? '"All"'}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue
                    placeholder={filterByLGA.length > 0 ? filterByLGA : "LGA"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  {/* <p className="">{lgas[filterByState]}</p> */}
                  {lgas[filterByState]?.map((lga, index) => (
                    <SelectItem
                      value={lga}
                      key={index}
                      // onValueChange={(e:string) => handleState(e)}
                    >
                      {lga}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Input con */}

        <div className="flex items-center justify-center sm:block ">
          <form className="flex items-center gap-1 border border-black border-opacity-30 px-4 rounded-xl w-[80%] sm:w-80   xl:w-72 justify-between dark:border-white">
            <input
              type="text"
              className="p-2  focus:outline-none w-full bg-transparent"
              placeholder={`Search retailer`}
              value={searchTerm}
              onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                setSearchTerm(e.currentTarget.value)
              }
            />
            <span className="hover:cursor-pointer">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;
