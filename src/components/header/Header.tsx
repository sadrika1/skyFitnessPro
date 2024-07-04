import { getAuth, onAuthStateChanged } from "firebase/auth";
import Button from "../button/Button";
import { Link } from "react-router-dom";

export default function Header() {
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
        <Button classNames="w-[103px]" type="primary">
          Войти
        </Button>
      </div>
    </div>

    // если пользователь авторизован показываем это:
    /*
    <div className="flex justify-around items-center">
      <div>
        <img src="../public/images/logo.svg" alt="Logo" />
      </div>
    <UserName />
    </div>
    
    */
  );
}
