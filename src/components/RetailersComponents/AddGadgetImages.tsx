import FileUploader from "../FileUploader";
import ShowUploadedFiles from "../ShowUploadedFiles";

const AddGadgetImages = () => {
  return (
    <section className="flex-1 flex flex-col gap-8 border border-opacity-40 h-full px-4 items-start justify-center rounded-lg w-full md:w-auto">
      <div className="w-full sm:w-[90%]">
        <h1 className="text-lg  mt-4 mb-4">Add Images</h1>
        <FileUploader />
        <ShowUploadedFiles />
        <ShowUploadedFiles />
        <ShowUploadedFiles />
      </div>
    </section>
  );
};

export default AddGadgetImages;
