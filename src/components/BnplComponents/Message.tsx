import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

const Message = ({ show }: { show: string }) => {
  return (
    <section
      className={` w-full mb-10 ${show === "messages" ? "block" : "hidden"}`}
    >
      <div className="w-full border rounded-2xl h-[max-content] py-8 px-2">
        <div className="flex gap-12 w-full px-2 sm:px-6 mb-4">
          <p className="w-16 md:w-28">Message</p>
          <p className="">Lorem ipsum</p>
        </div>
        <div className="flex gap-12 w-full px-2 sm:px-6 mb-4">
          <p className="w-16 md:w-28">Date</p>
          <p className="">12:34PM 11th Nov,2020 (John Doe)</p>
        </div>{" "}
        <div className="flex gap-4 w-full px-2 sm:px-6 mb-4">
          <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-blue-500" />
          <p className="">autoreply</p>
        </div>
      </div>
    </section>
  );
};

export default Message;
