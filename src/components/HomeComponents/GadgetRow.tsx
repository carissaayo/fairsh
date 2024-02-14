import phoneImg from "../../assets/images/phone.jpg";

const GadgetRow = () => {
  return (
    <tr className="h-14 border-b border-opacity-10">
      <td className="font-normal  px-2  flex items-center justify-center h-full py-2 ">
        <img src={phoneImg} alt="gadget" className="h-[40px] w-[40px]" />
      </td>
      <td className="font-medium capitalize text-center text-base">
        {/* <p className="text-sm">Name</p> */}
        <p className="">Iphone 12 pro</p>
      </td>
      <td className="font-medium capitalize text-center text-base">
        {/* <p className="text-sm">Price</p> */}
        <p className="">#200,000.00</p>
      </td>
      <td className="font-medium capitalize text-center text-base">
        {/* <p className="text-sm">orders</p> */}
        <p className="">12</p>
      </td>{" "}
      <td className="font-medium capitalize text-center text-base">
        {/* <p className="text-sm ">Stock</p> */}
        <p className="">13</p>
      </td>
      <td className="font-medium capitalize text-center text-base">
        {/* <p className="text-sm">Amount</p> */}
        <p className="">#300,000.00</p>
      </td>
    </tr>
  );
};

export default GadgetRow;
