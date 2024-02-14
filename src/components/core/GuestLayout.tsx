import { Outlet } from "react-router-dom";

import BgImg from "../../assets/images/phoneBg.jpg";
const GuestLayout = () => {
  return (
    <main className=" w-full h-screen flex justify-between items-center">
      <div className="hidden lg:block w-full h-full">
        <img src={BgImg} alt="" className="w-full h-full" />
      </div>
      <Outlet />
    </main>
  );
};

export default GuestLayout;
