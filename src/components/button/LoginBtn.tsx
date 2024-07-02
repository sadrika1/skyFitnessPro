// import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
// import { removeUser } from "../store/slices/userSlice";
// import { useAppDispatch } from "../hooks/redux-hooks";
import {  useState } from "react";
import { ModalLogin } from "../modalItem/modal";


export default function LoginBtn() {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setLoginModal(!loginModal)}
        className="mt-8 mb-[30px] rounded-3xl bg-custom-green w-[103px] h-[52px] text-xl"
      >
        Войти
      </button>

      {loginModal && <ModalLogin />}
    </>
  );
}
