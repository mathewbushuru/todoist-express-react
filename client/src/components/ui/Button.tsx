import React, { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "",
      ghost: "",
      secondary:"",
      link: "",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<buttonProps> = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;
