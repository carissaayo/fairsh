import { ArrowUpTrayIcon, PhotoIcon } from "@heroicons/react/24/outline";

const FileUploader = () => {
  return (
    <label className="w-full h-[240px] border border-[#0A05F8] border-dashed bg-[#D9D9D9] bg-opacity-30 flex flex-col items-center justify-center hover:cursor-pointer gap-8 mb-10">
      <input type="file" className="w-full h-full hidden" />
      <PhotoIcon className="h-20 w-20 text-opacity-10 " />
      <div className="flex gap-4 items-center">
        <ArrowUpTrayIcon className=" h-8 w-8 xs:w-6 xs:h-6" />
        <p className="hidden xs:block">
          Drop your files here, or{" "}
          <span className="text-[#0A05F8] ">Browse</span>
        </p>
        {/* Mobile */}
        <p className=" xs:hidden">Upload Image</p>
      </div>
    </label>
  );
};

export default FileUploader;
