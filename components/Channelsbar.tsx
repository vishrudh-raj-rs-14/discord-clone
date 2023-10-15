import React, { FC } from "react";
import Search from "./Search";
import ChannelList from "./ChannelList";
import ProfileControls from "./ui/ProfileControls";

interface ChannelsbarProps {}

const Channelsbar: FC<ChannelsbarProps> = ({}) => {
  return (
    <div className="w-[240px] h-screen bg-[#2A2D31] flex flex-col items-center">
      <Search />
      <ChannelList />
      <ProfileControls />
    </div>
  );
};

export default Channelsbar;
