import React, { FC } from "react";
import Message from "./Message";

interface MessageListProps {}

const MessageList: FC<MessageListProps> = ({}) => {
  return (
    <div className="flex flex-col items-start">
      <Message img="https://github.com/shadcn.png" />
      <Message img="https://github.com/shadn.png" />
      <Message img="https://github.com/shadcn.png" />
      <Message img="https://github.com/shadn.png" />
    </div>
  );
};

export default MessageList;
