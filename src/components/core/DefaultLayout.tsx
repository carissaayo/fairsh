import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import TopNav from "./TopNav";
import SideNav from "./SideNav";
import BottomNav from "./BottomNav";
import { useLoginStore } from "../../context/auth/loginStore";
import { useUserProfileStore } from "../../context/auth/getProfile";

const DefaultLayout = () => {
  const user = useLoginStore((state) => state.user);

  const [openNav, setOpenNav] = useState<boolean>(false);

  // Function to close the Mobile Nav when clicking on the page
  const open = () => {
    if (openNav) {
      setOpenNav(false);
    }
  };

  if (!user?.accessToken) {
    return <Navigate to="login" />;
  }

  return (
    <>
      <main className="w-full h-screen overflow-hidden  relative  ">
        {/* <TopNav openNav={openNav} setOpenNav={setOpenNav} /> */}

        <section className="lg:flex h-screen  relative  " onClick={open}>
          <SideNav />
          <TopNav openNav={openNav} setOpenNav={setOpenNav} />
          {/* <ScrollArea> */}
          <Outlet />
          {/* <ScrollBar orientation="vertical" /> */}
          {/* </ScrollArea> */}
        </section>
        <BottomNav open={open} />
      </main>
    </>
  );
};

export default DefaultLayout;
