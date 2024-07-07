
import clsx from "clsx";
import { ReactNode, useState } from "react";
import { ModalLogin } from "../modalItem/modal";

enum ButtonType {
  primary = "bg-custom-green",
  secondary = "bg-white border border-black",
  icon = "bg-transparent",
}

export default function Button({
  children,
  type,
  classNames,
  fullWidth,
}: {
  children: ReactNode;
  type: "primary" | "secondary" | "icon";
  fullWidth?: boolean;
  classNames?: string;
}) {


  const [loginModal, setLoginModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setLoginModal(!loginModal)}
        className={clsx(
          `rounded-3xl h-[52px] text-lg px-5`,
          classNames,
          ButtonType[type],
          {
            "w-full": fullWidth,
          }
        )}
      >
        {children}
      </button>
      {loginModal && <ModalLogin />}
    </>
  );
}

