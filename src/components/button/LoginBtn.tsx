// import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
// import { removeUser } from "../store/slices/userSlice";
// import { useAppDispatch } from "../hooks/redux-hooks";
import {useContext} from "react";
import {LoginModalContext} from "../../contexts";


export default function LoginBtn() {
  // const [loginModal, setLoginModal] = useState(false);
    const { setIsLoginModalOpened } = useContext(LoginModalContext);

  return (
    <>
      <button
        onClick={() => setIsLoginModalOpened((prevValue) => !prevValue)}
        className="mt-8 mb-[30px] rounded-3xl bg-custom-green w-[83px] lg:w-[103px] h-[36px] lg:h-[52px] text-xl"
      >
        Войти
      </button>
    </>
  );
}
