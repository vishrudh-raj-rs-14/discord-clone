import React, { FC } from "react";

interface ProfileControlsProps {}

const ProfileControls: FC<ProfileControlsProps> = ({}) => {
  return (
    <div className="w-full h-[52px] px-[8px] bg-[#232428] flex items-center justify-start gap-2">
      <div
        className={`icon-container "rounded-[18px] bg-[#757E8A] rounded-[100%] w-[32px] h-[32px] flex justify-center items-center transition-all`}
      >
        <img src="/discord-white.png" className="w-[160%] max-w-[200%]" />
      </div>
      <div className="flex flex-col">
        <div className="text-[12px] font-[600] leading-[18px] w-[76px] truncate">
          vishrudh_raj_rs
        </div>
        <div className="text-[11px] text-[#8f8f8f] w-[76px] truncate leading-[12px]">
          vishrudh_raj_rs
        </div>
      </div>
      <div className="icons flex items-center justify-end gap-[14px] opacity-60 ml-4">
        <div className="icon">
          <img src="/mic.png" className="w-[16px]" />
        </div>
        <div className="icon">
          <img src="/headphone.png" className="w-[16px]" />
        </div>
        <div className="icon">
          <img src="/settings.png" className="w-[16px]" />
        </div>
      </div>
    </div>
  );
};

export default ProfileControls;
