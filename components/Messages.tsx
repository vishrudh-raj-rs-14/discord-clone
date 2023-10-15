import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import MessageList from "./MessageList";

interface MessagesProps {}

const Messages: FC<MessagesProps> = ({}) => {
  return (
    <div className="flex flex-col min-h-[90%] items-start justify-end p-3 ">
      <div className="flex flex-col items-start text-white">
        <Avatar className="h-[26px] w-[26px] w-[80px] h-[80px] bg-black">
          <AvatarImage src="https://github.com/shadn.png" />
          <AvatarFallback className="bg-black">CN</AvatarFallback>
        </Avatar>
        <div className="font-[700] my-[10px] text-[28px] leading-[40px] mb-[10px]">
          vishrudh007
        </div>
        <div className="font-[500] text-[18px] leading-[30px] mb-[15px]">
          vishrudh_raj_rs_14
        </div>
        <div className="text-[#B5BAC0] text-[14px]">
          This is the beginning of your direct message history with vishrudh007
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="text-[#999da3] text-[12px]">No Servers in Common</span>
        <span className="text-[#6f7377] text-[16px] flex items-center mb-[8px] mx-3">
          .
        </span>
        <div>
          <Button className="bg-[#5764F2] hover:bg-[#4955d6] active:bg-[#363fa6] h-[28px] rounded-sm">
            Add Friend
          </Button>
        </div>
        <div>
          <Button className="bg-[#4D5057] hover:bg-[#757982] active:bg-[#9699a2] h-[28px] rounded-sm">
            Block
          </Button>
        </div>
      </div>
      <hr className="border-t border-zinc-700 w-full mt-[20px]" />
      <MessageList />
    </div>
  );
};

export default Messages;
