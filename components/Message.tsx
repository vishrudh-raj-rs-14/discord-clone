import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MessageProps {
  img: string;
}

const Message: FC<MessageProps> = ({ img }) => {
  return (
    <div className="flex gap-3 items-center m-3 mt-[17px] mb-0">
      <Avatar className="h-[36px]">
        <AvatarImage src={img} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-[0px]">
        <div className="text-[#DBDEE1] font-[600] text-[14px]">
          vishrudh007
          <span className="text-[#7c828c] text-[12px] font-[500] ml-3">
            Today at 5:58 PM
          </span>
        </div>
        <div className="text-[#DBDEE1] text-[16px]">Hi</div>
      </div>
    </div>
  );
};

export default Message;
