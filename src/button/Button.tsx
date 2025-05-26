import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
  className?: string;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  xl,
  children,
  className,
  asChild = false,
  ...rest
}: IButtonProps) => {
  const Comp = asChild ? Slot : "button";

  const btnClass = classNames(
    "inline-block rounded-full text-center font-semibold transition duration-200",
    {
      "text-lg py-2 px-4": !xl,
      "text-xl py-4 px-6 font-bold": xl,
      "bg-primary-500 hover:bg-primary-600 text-white": true,
    },
    className,
  );

  return (
    <Comp className={btnClass} {...rest}>
      {children}
    </Comp>
  );
};

export { Button };
