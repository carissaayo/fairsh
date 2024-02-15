import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

import { Bnpl } from "../../lib/types";
const CustomerDetails = ({ bnpl }: { bnpl: Bnpl }) => {
  return (
    <section className="w-full  md:flex-1  border-r">
      <p className="text-xl font-bold flex items-center gap-2 flex-wrap pb-4 border-b">
        <UserCircleIcon className="w-6 h-6" />
        <span className="">{bnpl.userId.firstName}</span>
        <span className="">{bnpl.userId.lastName}</span>
        <span className="">{bnpl.userId.otherName}</span>
      </p>
      <div className="flex gap-10 items-center w-full border-b  light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">BVN</p>
        <p className="">{bnpl?.bvn}</p>
      </div>
      <div className="flex gap-10 items-center border-b px-3 h-[50px]">
        <p className="w-28">NIN</p>
        <p className="">123456789</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Phone</p>
        <p className="">{bnpl?.phoneNumber}</p>
      </div>
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Phone (BVN)</p>
        <p className="">{bnpl?.phoneNumber}</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Email</p>
        <p className="">johndoe@gmail.com</p>
      </div>
      <div className="flex gap-10 items-center border-b 2f2] h-[50px] px-3">
        <p className="w-28">State</p>
        <p className="">{bnpl?.storeId.state}</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">City</p>
        <p className="">{bnpl?.userId.city}</p>
      </div>
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Address</p>
        <p className="">lorem ipsum</p>
      </div>{" "}
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Occupation</p>
        <p className="">Tailor</p>
      </div>{" "}
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Employer</p>
        <p className="">self-employed</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Income</p>
        <p className="">&#8358; {bnpl.monthlyAmount.toFixed(2)}</p>
      </div>
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">D.O.B</p>
        <p className="">31st Jan, 2024</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">State of Origin</p>
        <p className="">{bnpl?.userId.state}</p>
      </div>{" "}
      <div className="flex gap-10 items-center border-b h-[50px] px-3">
        <p className="w-28">Gender</p>
        <p className="">Male</p>
      </div>{" "}
      <div className="flex gap-10 items-center border-b  light:bg-[#f2f2f2] h-[50px] px-3 mb-4">
        <p className="w-28">Marital Status</p>
        <p className="">Single</p>
      </div>
    </section>
  );
};

export default CustomerDetails;
