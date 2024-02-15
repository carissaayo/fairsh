import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const TopRetailers = () => {
  return (
    <section className="border border-gray-100  rounded-t-xl w-full sm:w-[80%] lg:w-[60%] xxl:flex-1 bg-white">
      <div className=" w-full border-b border-gray-100 h-10 flex items-center pl-4 py-6 ">
        <p className="font-medium text-xl ">Top Loans</p>
      </div>
      <ScrollArea className="w-full">
        <table className=" min-w-[400px] w-full">
          {/* Table row */}
          <tr className="h-14 border-b border-gray-100">
            <td className="font-medium capitalize text-center   h-full">
              <div className="h-14 flex items-center gap-2 px-4">
                <UserCircleIcon className="h-4 w-4" />
                <p className="">Seyi Omo</p>
              </div>
            </td>
            <td className="font-medium capitalize text-center  ">
              <p className="">&#8358; 300,000.00</p>
            </td>{" "}
            <td className="font-medium capitalize text-center">
              <p className="">Jan 14th,2024 </p>
            </td>
          </tr>

          {/* Table row */}
          <tr className="h-14 border-b border-gray-100">
            <td className="font-medium capitalize text-center   h-full">
              <div className="h-14 flex items-center gap-2 px-4">
                <UserCircleIcon className="h-4 w-4" />
                <p className="">Seyi Omo</p>
              </div>
            </td>
            <td className="font-medium capitalize text-center  ">
              <p className="">&#8358; 300,000.00</p>
            </td>{" "}
            <td className="font-medium capitalize text-center">
              <p className="">Jan 14th,2024 </p>
            </td>
          </tr>

          {/* Table row */}
          <tr className="h-14 border-b border-gray-100">
            <td className="font-medium capitalize text-center   h-full">
              <div className="h-14 flex items-center gap-2 px-4">
                <UserCircleIcon className="h-4 w-4" />
                <p className="">Seyi Omo</p>
              </div>
            </td>
            <td className="font-medium capitalize text-center  ">
              <p className="">&#8358; 300,000.00</p>
            </td>{" "}
            <td className="font-medium capitalize text-center">
              <p className="">Jan 14th,2024 </p>
            </td>
          </tr>

          {/* Table row */}
          <tr className="h-14 border-b border-gray-100">
            <td className="font-medium capitalize text-center   h-full">
              <div className="h-14 flex items-center gap-2 px-4">
                <UserCircleIcon className="h-4 w-4" />
                <p className="">Seyi Omo</p>
              </div>
            </td>
            <td className="font-medium capitalize text-center  ">
              <p className="">&#8358; 300,000.00</p>
            </td>{" "}
            <td className="font-medium capitalize text-center">
              <p className="">Jan 14th,2024 </p>
            </td>
          </tr>

          {/* Table row */}
          <tr className="h-14 border-b border-gray-100">
            <td className="font-medium capitalize text-center   h-full">
              <div className="h-14 flex items-center gap-2 px-4">
                <UserCircleIcon className="h-4 w-4" />
                <p className="">Seyi Omo</p>
              </div>
            </td>
            <td className="font-medium capitalize text-center  ">
              <p className="">&#8358; 300,000.00</p>
            </td>{" "}
            <td className="font-medium capitalize text-center">
              <p className="">Jan 14th,2024 </p>
            </td>
          </tr>
        </table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default TopRetailers;
