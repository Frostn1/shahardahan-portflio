import { Outlet } from "react-router";
import Navbar from "./navbar";

export const Layout = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="mt-[60px]">
        <Outlet />
      </div>
    </div>
  );
};
