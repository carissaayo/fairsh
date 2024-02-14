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

const Search = () => {
  return (
    <section className=" h-[140px] sm:h-[70px] border border-opacity-35 flex justify-center flex-col px-8 rounded-lg  mb-10 ">
      <div className="flex  gap-6 sm:gap-12 lg:gap-4 justify-center sm:justify-start flex-col  sm:flex-row">
        <div className=" flex gap-2 justify-start  items-center w-full">
          <AdjustmentsHorizontalIcon className="h-6 w-6" />

          <Select
            // onValueChange={(e) => handleState(e)}
            defaultValue="All"
          >
            <SelectTrigger className="w-[80%] sm:w-[120px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Input con */}

        <div className="flex items-center justify-center sm:block ">
          <form className="flex items-center gap-1 border border-black border-opacity-30 px-4 rounded-xl w-[90%] sm:w-80   xl:w-72 justify-between dark:border-white">
            <input
              type="text"
              className="p-2  focus:outline-none w-full bg-transparent"
              placeholder="search"
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

export default Search;
