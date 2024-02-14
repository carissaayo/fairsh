import { Bars } from "react-loader-spinner";
import { useBnplStore } from "../../context/Bnpl/getBnpl";
import BnplItem from "./BnplItem";

const MainList = () => {
  const bnpls = useBnplStore((state) => state.bnpls);
  const filterBnplLoading = useBnplStore((state) => state.filteredBnplLoading);
  if (filterBnplLoading) {
    return (
      <div className="w-full flex items-center justify-center flex-1 h-full mb-10">
        <Bars
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <main className="">
      {bnpls.length > 0 &&
        bnpls.map((bnpl) => <BnplItem key={bnpl._id} bnpl={bnpl} />)}
    </main>
  );
};

export default MainList;
