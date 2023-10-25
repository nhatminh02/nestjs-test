import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const RootLayout = () => {
  return (
    <div className="flex">
      <div className="fixed inline-block min-h-screen w-[270px] border-r-2 border-[#f3f3e7] bg-[#FBFBFA]">
        <SideBar />
      </div>
      <div className="ml-[270px] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
