import {createContext, Dispatch, SetStateAction} from "react";

interface LoginModalContextType {
    isLoginModalOpened: boolean;
    setIsLoginModalOpened: Dispatch<SetStateAction<boolean>>;
}

export const LoginModalContext = createContext<LoginModalContextType>({
    isLoginModalOpened: false,
    setIsLoginModalOpened: () => {},
});
