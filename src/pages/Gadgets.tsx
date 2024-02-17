import GadgetCard from "../components/gadgetsComponents/GadgetCard";
import Header from "../components/gadgetsComponents/Header";

const Gadgets = () => {
  return (
    <main className=" w-full h-full pt-8 px-6 sm:px-4 md:px-8   overflow-y-scroll mb-40">
      <Header />
      <section className="mb-40 grid grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-2 md:gap-12 xl:gap-8   w-full">
        <GadgetCard />
        <GadgetCard />
        <GadgetCard />
        <GadgetCard />
        <GadgetCard />
        <GadgetCard />

        <section className="">{/* <PaginationCon /> */}</section>
      </section>
    </main>
  );
};

export default Gadgets;
