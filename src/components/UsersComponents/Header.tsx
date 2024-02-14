import { Link } from "react-router-dom";
import { useLoginStore } from "../../context/auth/loginStore";
import AddUser from "./AddUser";

const Header = () => {
  const isAdmin = useLoginStore((state) => state.user).profile.adminId;

  return (
    <section className="w-full flex justify-between items-center flex-col sm:flex-row  mb-10">
      <div className="w-full">
        <h1 className="font-bold text-3xl mb-2 capitalize">Manage Users(20)</h1>
      </div>
      {isAdmin && (
        <div className=" w-full flex justify-end sm:Block">
          <AddUser />
          {/* <Link
            to="/add-user"
            className="bg-[#0A05F8]  text-white hover:bg-[#0A05F8] hover:scale-105"
          >
            Add New User
          </Link> */}
        </div>
      )}
    </section>
  );
};

export default Header;
