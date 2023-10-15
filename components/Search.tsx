import React, { FC } from "react";
import { Button } from "./ui/button";

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div className="min-h-[46px] h-[46px] w-full px-[10px] flex justify-center items-center border-b border-sidebarGray">
      <Button className="bg-[#1E1F22] text-[#949ba4] text-[13px] font-[500] h-[28px] w-full rounded-[4px leading-[24px] text-left p-[8px] justify-start">
        Find or start a conversation
      </Button>
    </div>
  );
};

export default Search;
