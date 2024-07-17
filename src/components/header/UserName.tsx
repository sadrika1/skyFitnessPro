// import { useState } from "react";
// import { useAppDispatch } from "../../hooks/redux-hooks";
// import { removeUser } from "../../store/slices/userSlice";
// import { Link } from "react-router-dom";
// import { appRoutes } from "../../route/appRoutes";
// import { getAuth, signOut } from "firebase/auth";
// import { firebaseApp } from "../../api/api";

// export default function UserName() {
//   const dispatch = useAppDispatch();
//   const [isOpen, setIsOpen] = useState(false);
//   const auth = getAuth(firebaseApp);
//   const currentUser = auth.currentUser;

//   const logout = () => {
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//       });
//   };
//   console.log(auth);
//   return (
//     <div
//       onClick={() => setIsOpen(!isOpen)}
//       className="flex flex-row items-center"
//     >
//       <div className="flex flex-row items-center gap-2 cursor-pointer text-xl">
//         <img src="../../public/images/icons/Profile.svg" alt="" />
//         <div>{currentUser?.email}</div>
//         <img src="../../public/images/icons/arrow.svg" alt="" />
//       </div>
//       <button onClick={logout}>Выйти</button>
//       {/* {isOpen && (
//         <div className="bg-slate-500">
//           <div className="flex flex-column h-[258px] w-[266]">
//             <Link to={appRoutes.USER_PAGE}>
//               <button>Мой профиль</button>
//             </Link>
         
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// }
