import { useState } from "react";

import { GearSix, SignOut } from "phosphor-react";

import placeholder from "../../assets/placeholder.svg";
import { useAuth } from "../../hooks/AuthContext";

export const Header = () => {
  const { logout, user } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full h-48 bg-violet-800">
      <div className="container mx-auto flex items-center h-full justify-center relative">
        <span className="-translate-y-7 text-2xl md:text-4xl font-bold tracking-wider text-gray-100">
          Finance Plus
        </span>
        <button
          onClick={() => setOpenMenu(prev => !prev)}
          className="text-gray-100 flex items-center gap-x-2 absolute right-0 top-10">
          <span className="text-lg font-medium">{user.name}</span>
          <img
            className="w-14 -translate-y-1"
            src={placeholder}
            alt=""
          />
        </button>
        <div
          className={`${
            openMenu ? "block" : "hidden"
          } bg-gray-100 py-2 shadow rounded z-10 absolute right-0 top-24`}>
          <button className="flex items-center gap-x-1 hover:bg-gray-200 px-4 py-3">
            <span>Ajustes</span>
            <GearSix size={20} />
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-x-1 hover:bg-gray-200 px-4 py-3 w-full justify-center">
            <span>Sair</span>
            <SignOut size={20} />
          </button>
          <div></div>
        </div>
      </div>
    </header>
  );
};
