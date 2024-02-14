import { UserCircleIcon } from "@heroicons/react/24/outline";

const TopRetailers = () => {
  return (
    <section className="border border-opacity-20  rounded-t-xl   w-full xl:flex-1 bg-white">
      <div className=" w-full border-b border-opacity-25 h-10 flex items-center pl-4 py-6 ">
        <p className="font-medium text-xl ">Top Loans</p>
      </div>

      <table className="  w-full">
        {/* Table row */}
        <tr className="h-14 border-b border-opacity-10">
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
        <tr className="h-14 border-b border-opacity-10">
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
        <tr className="h-14 border-b border-opacity-10">
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
        <tr className="h-14 border-b border-opacity-10">
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
        <tr className="h-14 border-b border-opacity-10">
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
    </section>
  );
};

export default TopRetailers;
