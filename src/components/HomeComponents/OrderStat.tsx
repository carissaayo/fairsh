import { ChevronDownIcon } from "@heroicons/react/24/outline";

const OrderStat = () => {
  return (
    <section className="border border-opacity-20  rounded-t-xl  w-full ">
      <div className=" w-full border-b border-opacity-25 h-10 flex items-center pl-4 bg-[#D2E0ED] bg-opacity-40 justify-between ">
        <p className="font-medium text-xl">Order Statistics</p>
        <div className="text-base flex items-center gap-4 px-4">
          Sort By:{" "}
          <p className="font-semibold flex items-center gap-2 hover:cursor-pointer">
            Daily{" "}
            <span className="">
              <ChevronDownIcon className="w-6 h-6" />
            </span>
          </p>
        </div>
      </div>
      <table className="  w-full">
        {/* Table row */}
        <tr className="h-14 border-b border-opacity-10 ">
          <td className="font-medium capitalize px-4">Total Orders</td>

          <td className="font-medium capitalize">40</td>
        </tr>

        {/* Table row */}
        <tr className="h-14 border-b border-opacity-10 ">
          <td className="font-medium capitalize px-4">Phones</td>

          <td className="font-medium capitalize">20</td>
        </tr>

        {/* Table row */}
        <tr className="h-14 border-b border-opacity-10 ">
          <td className="font-medium capitalize px-4">Laptops</td>

          <td className="font-medium capitalize">10</td>
        </tr>

        {/* Table row */}
        <tr className="h-14 border-b border-opacity-10 ">
          <td className="font-medium capitalize px-4">TV</td>

          <td className="font-medium capitalize">4</td>
        </tr>

        {/* Table row */}
        <tr className="h-14 border-b border-opacity-10 ">
          <td className="font-medium capitalize px-4">Others</td>

          <td className="font-medium capitalize">1</td>
        </tr>
      </table>
    </section>
  );
};

export default OrderStat;
