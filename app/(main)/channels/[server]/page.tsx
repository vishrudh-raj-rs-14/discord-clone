import FriendRequests from "@/components/FriendRequests";
import FriendsHeader from "@/components/FriendsHeader";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex-grow-[100] flex flex-col">
      <FriendsHeader active="online" />
      <FriendRequests requests={1} />
    </div>
  );
};

export default page;
