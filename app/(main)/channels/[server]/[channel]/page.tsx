import MessageInput from "@/components/MessageInput";
import Messages from "@/components/Messages";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/Input";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex-grow-[100] h-full flex flex-col">
      <div className="w-full min-h-[46px] px-4 h-[46px] border-b border-sidebarGray flex items-center justify-between gap-4 text-[14px]">
        <div className="flex items-center gap-3">
          <Avatar className="h-[26px] w-[26px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-white text-[14px] font-[600]">Vishrudh007</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[36px] h-[36px] flex items-center justify-center opacity-75 hover:opacity-100">
            <img src="/viber.png" className="h-[18px]" />
          </div>
          <div className="w-[36px] h-[36px] flex items-center justify-center opacity-75 hover:opacity-100">
            <img src="/camera.png" className="h-[22px]" />
          </div>
          <div className="w-[162px] px-3 flex h-[24px] items-center justify-center focus-within:w-[270px] transition-all duration-[250ms] ease ">
            <Input
              type="text"
              placeholder="Search"
              className="flex-grow-[100] bg-[#1E1F22] text-[14px] placeholder:text-[13px] flex items-center placeholder:font-[600] border-none outline-none ring-0 rounded-sm rounded-r-none h-[24px] text-[#edededc1] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0 placeholder:text-[#b5babfc0] focus-visible:ring-offset-0 transition-all duration-200 "
            />
            <div className="w-[32px] h-[24px] bg-[#1E1F22] flex items-center justify-center rounded-sm hover:cursor-pointer">
              <img src="/loupe.png" className="w-[12px]" />
            </div>
          </div>
          <div className="w-[36px] h-[36px] flex items-center justify-center opacity-75 hover:opacity-100 ">
            <img src="/help-web-button.png" className="h-[22px]" />
          </div>
        </div>
      </div>
      <div className="h-full w-full relative">
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default page;
