import Logo from "../logo/logo";
import { usePage } from "@inertiajs/react";

export default function Header() {
  const { auth } = usePage().props;  // Acessa o objeto 'auth' compartilhado

  return (
    <>
      <header className="flex h-[5vh] justify-between items-center pl-[5%] pr-[5%] shadow-sm sticky top-0 bg-white z-20">
        <Logo />
        {auth.user ? (
          <div className="flex items-center">
            <span>Bem-vindo, {auth.user.usu_nome}!</span>
            <a href="/logout" className="ml-4 text-blue-500">Logout</a>
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
