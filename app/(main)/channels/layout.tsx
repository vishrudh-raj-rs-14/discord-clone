import Channelsbar from "@/components/Channelsbar";
import React, { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex">
      <Channelsbar />
      {children}
    </div>
  );
};

export default layout;
