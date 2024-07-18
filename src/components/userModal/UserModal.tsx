
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import Button from "../button/Button";
import { appRoutes } from "../../route/appRoutes";

import { useContext } from "react";
import { UserModalContext } from "../../contexts";
import { removeUser } from "../../store/slices/userSlice";
import { useOutsideClick } from "../../hooks/use-outside-click";


const UserModal = ({ handleUserModal }) => {
  const user = useAppSelector((state) => state.user);

  
  const { setIsUserModalOpen } = useContext(UserModalContext);

  const { ref } = useOutsideClick(handleUserModal);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function onLogout() {
    dispatch(removeUser());
    navigate(appRoutes.MAIN);

setIsUserModalOpen((prev) => !prev)
  }


  return (
    <div
      ref={ref}
      className="bg-white p-10 rounded-3xl flex flex-col gap-5 items-center absolute top-14 drop-shadow-md z-[1] right-0"
    >
      <div className="flex flex-col gap-3 text-center">
        <span>{user.email}</span>
      </div>
      <div className="flex flex-col gap-3">
        <Button type="primary" classNames="w-[206px]">
          <Link to={appRoutes.USER_PAGE}>Профиль</Link>
        </Button>



        <Button type="secondary" classNames="w-[206px]" onClick={onLogout}>

          Выйти
        </Button>
      </div>
    </div>
  );
};

export default UserModal;
