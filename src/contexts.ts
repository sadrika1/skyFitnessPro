import { createContext, Dispatch, SetStateAction } from "react";

interface LoginModalContextType {
  isLoginModalOpened: boolean;
  setIsLoginModalOpened: Dispatch<SetStateAction<boolean>>;
}

interface UserModalContextType {
  isUserModalOpen: boolean;
  setIsUserModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const LoginModalContext = createContext<LoginModalContextType>({
  isLoginModalOpened: false,
  setIsLoginModalOpened: () => {},
});

export const UserModalContext = createContext<UserModalContextType>({
  isUserModalOpen: false,
  setIsUserModalOpen: () => {},
});
