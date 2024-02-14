const Comment = ({ show }: { show: string }) => {
  return (
    <section
      className={` w-full mb-10 ${show === "notes" ? "block" : "hidden"}`}
    >
      <div className="w-full border rounded-2xl h-[max-content] py-8 px-2">
        <div className="flex gap-12 w-full px-2 sm:px-6 mb-4">
          <p className="w-16 md:w-28">Comment</p>
          <p className="">Lorem ipsum</p>
        </div>
        <div className="flex gap-12 w-full px-2 sm:px-6 mb-4">
          <p className="w-16 md:w-28">Date</p>
          <p className="">11th Nov,2020</p>
        </div>{" "}
        <div className="flex gap-12 w-full px-2 sm:px-6 mb-4">
          <p className="w-16 md:w-28">Reachable</p>
          <p className="">John Doe (12:30PM 21st Oct 2020)</p>
        </div>
      </div>
    </section>
  );
};

export default Comment;
