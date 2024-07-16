import Button from "../button/Button";
import { Link } from "react-router-dom";

import {useContext} from "react";
import {LoginModalContext} from "../../contexts";

import { useContext, useState } from "react";
import { LoginModalContext } from "../../contexts";
import { useAppSelector } from "../../hooks/redux-hooks";
import UserModal from "../userModal/UserModal";
// import { useAuth } from "../../hooks/use-auth";
// import UserName from "./UserName";
// import { getAuth } from "firebase/auth";
// import { firebaseApp } from "../../api/api";


export default function Header() {
  const { isLoginModalOpened, setIsLoginModalOpened } =
    useContext(LoginModalContext);


  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  function handleUserModal() {
    setIsUserModalOpen((prev) => !prev);
  }


  const user = useAppSelector((state) => state.user);

  // const { isAuth } = useAuth();
  // const auth = getAuth(firebaseApp);
  return (

    <>
    <div className="flex justify-center">
      <div className="flex justify-between center items-center h-[145px] w-[1440px]">
        <div>
          <Link to="/">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
          <p className="sm:hidden lg:flex font-roboto">
            Онлайн-тренировки для занятий дома
          </p>
        </div>

        <Button classNames="w-[103px]" type="primary" onClick={() => setIsLoginModalOpened(!isLoginModalOpened)}>
          Войти
        </Button>
      </div>
    </div>

        {/* {!auth.currentUser?.emailVerified ? ( */}
          {user.email ? (
          <div className="flex justify-between items-center w-[168px]">
            <div className="rounded-full overflow-hidden">
              <img
                width={40}
                height={40}
                src="/images/person.jpg"
                alt="Иконка пользователя"
              />
            </div>
            <div className="text-2xl flex items-center gap-3 relative">
              {user.email}
              <Button
                type="icon"
                classNames="w-3.5 px-0"
                onClick={handleUserModal}
              >
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </Button>
              {isUserModalOpen && <UserModal />}
            </div>
          </div>
        ) : (
          <Button
            classNames="w-[103px]"
            type="primary"
            onClick={() => setIsLoginModalOpened(!isLoginModalOpened)}
          >
              Войти
            </Button>
        )}
        {/* ) : (
          <UserName />
        )} */}

      </div>
    </div>

    </>

  );
}
