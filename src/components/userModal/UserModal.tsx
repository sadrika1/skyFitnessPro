import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import Button from "../button/Button";
import { appRoutes } from "../../route/appRoutes";
import { removeUser } from "../../store/slices/userSlice";

const UserModal = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  return (
    <div className="bg-white p-10 rounded-3xl flex flex-col gap-5 items-center absolute top-10 drop-shadow-md z-[1]">
      <div className="flex flex-col gap-3 text-center">
        <span>{user.email}</span>
      </div>
      <div className="flex flex-col gap-3">
        <Button type="primary" classNames="w-[206px]">
          <Link to={appRoutes.USER_PAGE}>Профиль</Link>
        </Button>
        <Button
          type="secondary"
          classNames="w-[206px]"
          onClick={() => {
            dispatch(removeUser());
          }}
        >
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default UserModal;
