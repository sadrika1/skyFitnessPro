import { ReactNode } from "react";

export default function Button({
  children,
  type,
  fullWidth,
}: {
  children: ReactNode;
  type: string;
  fullWidth: boolean;
}) {
  const className =
    type === "primary" ? "bg-green" : "bg-white border border-black";
  return (
    <button
      className={`rounded-3xl ${className} ${
        fullWidth ? "w-[192px]" : "w-[103px]"
      } h-[52px] text-lg px-5`}
    >
      {children}
    </button>
  );
}
