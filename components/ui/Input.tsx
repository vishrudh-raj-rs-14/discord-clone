import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-grow-[100] bg-[#1E1F22] text-[14px] placeholder:text-[13px] flex items-center placeholder:font-[600] border-none outline-none ring-0 rounded-r-none text-[#edededc1] focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0 placeholder:text-[#b5babfc0] focus-visible:ring-offset-0 transition-all duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
