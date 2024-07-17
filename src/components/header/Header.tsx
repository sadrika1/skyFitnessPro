import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginModalContext, UserModalContext } from "../../contexts";
import { useAppSelector } from "../../hooks/redux-hooks";
import UserModal from "../userModal/UserModal";
import { getValueFromLocalStorage } from "../../lib/getValueFromLS";

export default function Header() {
  const { isLoginModalOpened, setIsLoginModalOpened } =
    useContext(LoginModalContext);

    const { isUserModalOpen, setIsUserModalOpen } =
    useContext(UserModalContext);


  function handleUserModal() {
    setIsUserModalOpen((prev) => !prev);
    console.log(isUserModalOpen);
  }

  //const user = useAppSelector((state) => state.user);
  const email = getValueFromLocalStorage("email");

  

  

  return (
    <div className="flex justify-center bg-slate-50">
      <div className="flex justify-between center items-center h-[145px] w-full max-w-screen-xl mx-4">
        <div>
          <Link to="/">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
          <p className="sm:hidden lg:flex font-roboto">
            Онлайн-тренировки для занятий дома
          </p>
        </div>
        {email ? (
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
              {email}
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
      </div>
    </div>
  );
}
