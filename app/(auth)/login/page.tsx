"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { signIn } from "next-auth/react";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-[#25262B] w-200px gap-1 p-5 text-[#ebebeb] text-[22px] font-[600] flex flex-col items-center justify-center rounded-sm">
      <div className="m-4">
        <h1 className="mt-[-8px] text-center">Welcome Back</h1>
        <div className="text-[12px] text-[#999da3] font-[400] m-">
          We are excited to see you again !
        </div>
      </div>
      {/* <div>
        <div>
          <div className="">Email</div>
          <Input placeholder="" type="text" />
        </div>
        <div>
          <div>Password</div>
          <Input placeholder="" type="text" />
        </div>
      </div> */}
      <Button
        className=" w-full flex items-center gap-2 hover:bg-[#e0e0e0] hover:text-black transition-all active:bg-[#abafb9]"
        onClick={() => signIn("google")}
      >
        <img src="/google.png" className="h-[20px]" />
        Sign In with Google
      </Button>
    </div>
  );
};

export default page;
