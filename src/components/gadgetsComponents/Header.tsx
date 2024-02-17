import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <section className="flex flex-col 2xl:flex-row justify-between items-start 2xl:items-center w-full mb-10 gap-6">
      <div className="  flex-1">
        <h1 className="font-bold text-3xl mb-2 capitalize">Gadgets(20)</h1>
      </div>
      <div className=" flex flex-col sm:flex-row  sm:items-center w-full justify-between sm:justify-end  md:gap-16 flex-1 items-center  gap-4 xl:gap-32">
        <div className="hidden md:block">
          <ToggleGroup
            type="multiple"
            variant="outline"
            className="flex gap-4 xl:gap-8"
          >
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              {/* <Button variant="outline">ALL</Button> */}
              ALL
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              PHONES
            </ToggleGroupItem>
            <ToggleGroupItem
              value="strikethrough"
              aria-label="Toggle strikethrough"
            >
              LAPTOPS
            </ToggleGroupItem>

            <ToggleGroupItem
              value="strikethrough"
              aria-label="Toggle strikethrough"
            >
              TVs
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Mobile */}
        <div className="flex flex-col md:hidden sm:flex-row  sm:items-center w-full justify-between sm:justify-end gap-6  md:gap-16 xl:gap-6 flex-1">
          <div className=" flex gap-4  items-center cursor-pointer">
            <p className="h1-bold">Filter By</p>

            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="phones">Phones </SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
                <SelectItem value="tvs">TVs</SelectItem>
                <SelectItem value="sound-system">Sound System </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Input con */}

        <div className="flex-1 md:flex-auto w-full flex justify-end">
          <div className="flex items-center gap-1 border border-black border-opacity-30 px-4 rounded-xl w-72 justify-between dark:border-white">
            <input
              type="text"
              className="p-2  focus:outline-none w-full bg-transparent"
              placeholder="Search gadget"
            />
            <span className="hover:cursor-pointer">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
