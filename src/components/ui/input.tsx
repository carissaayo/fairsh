import * as React from "react";

import { cn } from "../../lib";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    // I added this useState
    // const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="flex relative">
        <input
          step={type === "number" ? "11" : ""}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {/* Added code starts */}
        {/* {pass && (
          <span className="absolute right-3 top-2 hover:cursor-pointer">
            {showPassword ? (
              <EyeSlashIcon
                className="h-6 w-6"
                aria-hidden="true"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeIcon
                className="h-6 w-6"
                aria-hidden="true"
                onClick={() => setShowPassword(true)}
              />
            )}
          </span>
        )} */}
        {/* Added code stops */}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
