"use client";
import Sidebar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#303338] text-white flex">
      <SessionProvider>
        <Sidebar active="directMessages" />
        <div className="h-full w-full">{children}</div>
      </SessionProvider>
    </div>
  );
};

export default layout;
