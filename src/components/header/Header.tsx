import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import UserName from "./UserName";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../../api/api";

export default function Header() {
  const { isAuth } = useAuth();
  const auth = getAuth(firebaseApp);
  return (
    // указать проверку авторизации и условие

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
        {!auth.currentUser?.emailVerified ? (
          <Button classNames="w-[103px]" type="primary">
            Войти
          </Button>
        ) : (
          <UserName />
        )}
      </div>
    </div>
  );
}
