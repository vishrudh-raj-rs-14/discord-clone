import React, { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-loginBg bg-cover bg-no-repeat flex items-center justify-center">
      {children}
    </div>
  );
};

export default layout;
