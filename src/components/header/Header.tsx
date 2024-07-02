import { Link } from "react-router-dom";
import LoginBtn from "../button/LoginBtn";

export default function Header() {
  return (
    // указать проверку авторизации и условие
    <div className="flex justify-around items-center">
      <div>
        <Link to="/">
          <img src="../public/images/logo.svg" alt="Logo" />
        </Link>
        <p>Онлайн-тренировки для занятий дома</p>
      </div>
      <LoginBtn />
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
