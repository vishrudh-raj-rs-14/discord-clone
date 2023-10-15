import React, { FC } from "react";
import { Input } from "./ui/input";

interface MessageInputProps {}

const MessageInput: FC<MessageInputProps> = ({}) => {
  return (
    <div className="absolute w-[90%] bottom-5 left-[50%] px-3 rounded-md translate-x-[-50%] bg-[#373A3F] flex items-center">
      <div>
        <img
          src="/plus (4).png"
          className="w-[20px] opacity-75 hover:opacity-100"
        />
      </div>
      <Input
        className="bg-transparent ring-0 placeholder:text-[#b5babf5e] text-[#edededf4] outline-0 border-none focus-visible:ring-0 focus-visible:border-none focus-visible:ring-offset-0 focus-visible:outline-0 "
        placeholder="Message @vishrudh007"
      />
      <div className="icons flex items-center gap-3">
        <div>
          <img
            src="/gif.png"
            className="w-[32px] opacity-75 hover:opacity-100"
          />
        </div>
        <div>
          <img
            src="/sticker.png"
            className="w-[36px] opacity-75 hover:opacity-100"
          />
        </div>
        <div>
          <img
            src="/laugh.png"
            className="w-[26px] opacity-75 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
