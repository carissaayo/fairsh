import FilterList from "./FilterList";
import MainList from "./MainList";
import Search from "./Search";

const MainCon = () => {
  return (
    <main className="flex-[2] ">
      <Search />
      <FilterList />

      <MainList />
    </main>
  );
};

export default MainCon;
