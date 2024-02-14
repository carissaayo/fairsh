import phoneImg from "../assets/images/phone.jpg";
import { TrashIcon } from "@heroicons/react/24/outline";

const ShowUploadedFiles = () => {
  return (
    <div className="">
      <div className="w-full border rounded-sm h-[60px] flex items-center justify-between mb-4">
        <div className="flex items-center  gap-8 p-4 flex-1">
          <img src={phoneImg} alt="" className="w-[40px] h-[40px]" />
          <div className="">
            <h1 className="">Image1.png</h1>
            <p className="">200KB</p>
          </div>
        </div>
        <div className="flex items-center flex-1 justify-end pr-4">
          <TrashIcon className="w-6 h-6 cursor-pointer hover:scale-105 text-[#F31414]" />
        </div>
      </div>
    </div>
  );
};

export default ShowUploadedFiles;
