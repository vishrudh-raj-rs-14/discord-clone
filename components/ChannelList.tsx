import React, { FC } from "react";

interface ChannelListProps {}

const ChannelList: FC<ChannelListProps> = ({}) => {
  return (
    <div className="w-full h-screen p-[10px] flex flex-col gap-[2px] text-[14px] font-[500]">
      <div className="flex w-full h-[42px] items-center justify-center opacity-[1]">
        <div className="bg-[#3F4248] hover:bg-[#34373C] pl-[16px] w-full flex items-center justify-start h-[42px] gap-[12px] rounded-[8px] cursor-pointer">
          <img src="/friends.png" className="w-[20px]" />
          <div className=" overflow-hidden overflow-ellipsis whitespace-nowrap">
            Friends
          </div>
        </div>
      </div>
      <div className="flex w-full h-[42px] items-center justify-center opacity-[0.6] hover:opacity-[1]">
        <div className=" hover:bg-[#34373C] pl-[16px] w-full flex items-center justify-start h-[42px] gap-[12px] rounded-[8px] cursor-pointer">
          <img src="/nitro.svg" className="w-[20px]" />
          <div className=" overflow-hidden overflow-ellipsis whitespace-nowrap">
            Nitro
          </div>
        </div>
      </div>
      <div className="flex w-full h-[42px] items-center justify-center opacity-[0.6] hover:opacity-[1]">
        <div className="hover:bg-[#34373C] pl-[16px] w-full flex items-center justify-start h-[42px] gap-[12px] rounded-[8px] cursor-pointer">
          <img src="/email.png" className="w-[20px]" />
          <div className=" overflow-hidden overflow-ellipsis whitespace-nowrap">
            Message Requests
          </div>
        </div>
      </div>
      <div className="text-white opacity-[0.6] flex items-center hover:opacity-100 justify-between px-[8px] py-[12px]">
        <div className="text-[12px] font-[600]">DIRECT MESSAGES</div>
        <div>
          <img
            src="/plus-white.png"
            className="w-[12px] hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
