"use client";
import React, { FC, useEffect } from "react";
import { Input } from "./ui/Input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";

interface FriendRequestsProps {
  requests: number;
}

const FriendRequests: FC<FriendRequestsProps> = ({ requests }) => {
  const session = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <div className="w-full flex-grow-[100] py-3 px-7">
      {requests == 0 ? (
        <div className="w-full h-full flex items-center justify-center flex-col text-[#939BA4] text-[14px] font-[500]">
          <img src="/wumpus-friend-requests.svg" />
          <div className="mt-8">No one around to play with wumpus</div>
        </div>
      ) : (
        <>
          <div className="w-full flex h-[32px] items-center justify-center ">
            <Input
              type="text"
              placeholder="Search"
              className="flex-grow-[100] bg-[#1E1F22] border-none outline-none ring-0 rounded-r-none h-[32px] text-[#edededc1] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0 placeholder:text-[#b5babfc0] focus-visible:ring-offset-0"
            />
            <div className="w-[32px] h-[32px] bg-[#1E1F22] flex items-center justify-center rounded-r-lg">
              <img src="/loupe.png" className="w-[16px]" />
            </div>
          </div>
          <div className="tab mt-4">
            <div className="text-[12px] font-[600] text-textGray tracking-wider my-5">
              ALL FRIENDS - 4
            </div>
            <div className="w-full flex flex-col">
              <div className="group flex w-full border-t border-stone-700 h-[60px] items-center rounded-sm hover:bg-[#383C41] hover:cursor-pointer box-content px-2">
                <div className="flex flex-grow-[100] h-[60px] items-center gap-4">
                  <Avatar className="h-[36px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className=" flex flex-col gap-0">
                    <div className="text-white text-[14px] font-[600]">
                      Vishrudh007
                    </div>
                    <div className="text-textGray text-[13px]">Offline</div>
                  </div>
                </div>
                <div className="flex w-[86px] items-center gap-2">
                  <div className="rounded-full bg-[#2A2D31] w-[36px] h-[36px] flex items-center justify-center">
                    <img
                      src="/message.png"
                      className="w-[16px] opacity-70 group-hover:opacity-100 "
                    />
                  </div>
                  <div className="rounded-full bg-[#2A2D31] w-[36px] h-[36px] flex items-center justify-center">
                    <img
                      src="/dots.png"
                      className="w-[16px] opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
              <div className="group flex w-full border-t border-stone-700 h-[60px] items-center rounded-sm hover:bg-[#383C41] hover:cursor-pointer box-content px-2">
                <div className="flex flex-grow-[100] h-[60px] items-center gap-4">
                  <Avatar className="h-[36px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className=" flex flex-col gap-0">
                    <div className="text-white text-[14px] font-[600]">
                      Vishrudh007
                    </div>
                    <div className="text-textGray text-[13px]">Offline</div>
                  </div>
                </div>
                <div className="flex w-[86px] items-center gap-2">
                  <div className="rounded-full bg-[#2A2D31] w-[36px] h-[36px] flex items-center justify-center">
                    <img
                      src="/message.png"
                      className="w-[16px] opacity-70 group-hover:opacity-100 "
                    />
                  </div>
                  <div className="rounded-full bg-[#2A2D31] w-[36px] h-[36px] flex items-center justify-center">
                    <img
                      src="/dots.png"
                      className="w-[16px] opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
              <div className="group flex w-full border-t border-stone-700 h-[60px] items-center rounded-sm hover:bg-[#383C41] hover:cursor-pointer box-content px-2">
                <div className="flex flex-grow-[100] h-[60px] items-center gap-4">
                  <Avatar className="h-[36px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className=" flex flex-col gap-0">
                    <div className="text-white text-[14px] font-[600]">
                      Vishrudh007
                    </div>
                    <div className="text-textGray text-[13px]">Offline</div>
                  </div>
                </div>
                <div className="flex w-[86px] items-center gap-2">
                  <div className="rounded-full bg-[#2A2D31] w-[36px] h-[36px] flex items-center justify-center">
                    <img
                      src="/message.png"
                      className="w-[16px] opacity-70 group-hover:opacity-100 "
                    />
                  </div>
                  <div className="rounded-full bg-[#2A2D31] w-[36px] h-[36px] flex items-center justify-center">
                    <img
                      src="/dots.png"
                      className="w-[16px] opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
              <div className="group flex w-full border-t border-stone-700 h-[60px] items-center rounded-sm hover:bg-[#383C41] hover:cursor-pointer box-content px-2">
                <div className="flex flex-grow-[100] h-[60px] items-center gap-4">
                  <Avatar className="h-[36px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className=" flex flex-col gap-0">
                    <div className="text-white text-[14px] font-[600]">
                      Vishrudh007
                    </div>
                    <div className="text-textGray text-[13px]">Offline</div>
                  </div>
                </div>
                <div className="flex w-[86px] items-center gap-2">
                  <div className="rounded-full bg-[#2A2D31] w-[36px] h-[36px] flex items-center justify-center">
                    <img
                      src="/message.png"
                      className="w-[16px] opacity-70 group-hover:opacity-100 "
                    />
                  </div>
                  <div className="rounded-full bg-[#2A2D31] w-[36px] h-[36px] flex items-center justify-center">
                    <img
                      src="/dots.png"
                      className="w-[16px] opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FriendRequests;
