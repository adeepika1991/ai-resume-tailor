import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-5 py-3 rounded-xl font-semibold transition",
        "bg-[#00FFAB] text-black shadow-md hover:shadow-[0_0_20px_#00FFAB] hover:bg-[#00e6a0]",
        className
      )}
    >
      {children}
    </button>
  );
}
