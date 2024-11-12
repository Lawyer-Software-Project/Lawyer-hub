import Logo from "../logo/logo";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Header() {
  const { auth } = usePage().props;  // Acessa o objeto 'auth' compartilhado
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if(menuOpen) {
      document.getElementById("dropdownMenu").style.display = "block";
      setMenuOpen(!menuOpen);
    }
    else
    {
      document.getElementById("dropdownMenu").style.display = "none";
      setMenuOpen(!menuOpen);
    }
  };

    

  const handleLogout = () => {
    axios.post('/logout').then(() => {
      window.location.href = '/signin'; 
    });
  };

  return (
    
    <>
      <header className="flex h-[5vh] justify-between items-center pl-[5%] pr-[5%] shadow-sm sticky top-0 bg-white z-20">
        <Logo />
        {auth.user ? (
          <div className="flex items-center">
            <span>Bem-vindo, {auth.user.name}!</span>
            <div className="flex self-end">
            <img onClick={toggleMenu} id="menu-button" aria-expanded="true" aria-haspopup="true" src={`https://ui-avatars.com/api/?name=${auth.user.name}&background=5e87c5&rounded=true&size=30`} className="ml-2 cursor-pointer" alt="" />
            <div id="dropdownMenu" className="absolute hidden transition ease-in-out top-[2.2vw] right-[6rem] z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Meu Perfil</a>
      <a href="/cases" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-4">Meus Casos</a>
   </div>
    <div className="py-1" role="none">
      <a href="#" onClick={handleLogout} className="block px-4 py-2 text-sm text-red-700" role="menuitem" tabindex="-1" id="menu-item-6">Logout</a>
    </div>
  </div>
            </div>

          </div>
        ) : (
          <div className="flex gap-3 font-bold">
            <a href="/signin">
              <div id="login" className="flex flex-row gap-1">
                <span>Entrar</span>
                <img src="/assets/signIn.svg" alt="signIn" width="20px" />
              </div>
            </a>
            
            <a href="/signup">
              <div id="signUp" className="flex flex-row gap-1">
                <span>Cadastre-se</span>
                <img src="/assets/signUp.svg" alt="signUp" width="20px" />
              </div>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
