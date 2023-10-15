import React, { FC } from "react";

interface sidebarProps {
  active: string;
}

const Sidebar: FC<sidebarProps> = ({ active }) => {
  return (
    <div className="sidebar w-[72px] h-full bg-[#1E1F22] flex flex-col items-center pt-3 gap-2">
      <div className="icon w-full flex items-center justify-center">
        <div
          className={`icon-container  ${
            active == "directMessages"
              ? "rounded-[18px] bg-[#5865F2]"
              : "rounded-[100%] bg-[#303338]"
          } w-[48px] h-[48px] flex justify-center items-center transition-all`}
        >
          <img src="/discord-white.png" className="w-[160%] max-w-[200%]" />
        </div>
      </div>
      <div className="divider w-full flex items-center justify-center">
        <hr className="w-[50%] border-slate-700"></hr>
      </div>
      <div className="icon w-full flex items-center justify-center">
        <div
          className={`icon-container bg-[#303338] ${
            active == "createServer" ? "rounded-[18px]" : "rounded-[100%]"
          } w-[48px] h-[48px] flex justify-center items-center transition-all`}
        >
          <img src="/plus (2).png" className="w-[35%]" />
        </div>
      </div>
      <div className="icon w-full flex items-center justify-center">
        <div
          className={`icon-container bg-[#303338] ${
            active == "searchServer" ? "rounded-[18px]" : "rounded-[100%]"
          } w-[48px] h-[48px] flex justify-center items-center transition-all`}
        >
          <img src="/compass.png" className="w-[45%]" />
        </div>
      </div>
      <div className="divider w-full flex items-center justify-center">
        <hr className="w-[50%] border-slate-700"></hr>
      </div>
    </div>
  );
};

export default Sidebar;
