import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import cn from "../libs/cn";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-c-base text-c-text ">
      <div
        className={cn(
          "relative sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row",
          "justify-start lg:justify-center lg:items-start",
          "pt-4 px-3 pb-20 sm:pb-24 sm:pt-14 sm:px-7 gap-4 sm:gap-7"
        )}>
        <Sidebar />

        <div className="flex-1 w-full relative">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
