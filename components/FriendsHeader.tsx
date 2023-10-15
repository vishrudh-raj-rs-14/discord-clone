import React, { FC } from "react";

interface FriendsHeaderProps {
  active: string;
}

const FriendsHeader: FC<FriendsHeaderProps> = ({ active }) => {
  return (
    <div className="w-full h-[46px] border-b border-sidebarGray flex items-center justify-start gap-4 px-6 text-[14px]">
      <div className="flex items-center h-[26px] justify-start gap-[12px] font-[600] pr-4 border-r-2 border-zinc-700">
        <img src="/friends.png" className="w-[20px] opacity-60" />
        <div className=" overflow-hidden overflow-ellipsis whitespace-nowrap">
          Friends
        </div>
      </div>
      <div
        className={`flex items-center h-[26px] justify-center gap-[12px] font-[500] ml-1 mr-1 p-2 ${
          active == "online" ? "bg-[#43444A] rounded-sm" : "opacity-60"
        }`}
      >
        Online
      </div>
      <div
        className={`flex items-center h-[26px] justify-center gap-[12px] font-[500] mr-1 p-2 ${
          active == "all" ? "bg-[#43444A] rounded-sm" : "opacity-60"
        }`}
      >
        All
      </div>
      <div
        className={`flex items-center h-[26px] justify-center gap-[12px] font-[500] mr-1 p-2 ${
          active == "pending" ? "bg-[#43444A] rounded-sm" : "opacity-60"
        }`}
      >
        Pending
      </div>
      <div
        className={`flex items-center h-[26px] justify-center gap-[12px] font-[500] mr-1 p-2 ${
          active == "blocked" ? "bg-[#43444A] rounded-sm" : "opacity-60"
        }`}
      >
        Blocked
      </div>
      <div
        className={`flex items-center h-[26px] justify-center gap-[12px] rounded-sm font-[500] mr-1 p-2 ${
          active == "add" ? "text-[#2CC76F]" : "bg-green"
        }`}
      >
        Add Friend
      </div>
    </div>
  );
};

export default FriendsHeader;
