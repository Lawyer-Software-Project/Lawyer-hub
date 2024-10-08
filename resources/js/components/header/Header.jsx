import Logo from "../logo/logo"

export default function Header() {
  return (
    <>
      <header className="flex h-[5vh] justify-between items-center pl-[5%] pr-[5%] shadow-sm sticky top-0 bg-white z-20">
        <Logo />
        <a href="/signup">
          <div className="flex flex-row gap-2">
            <span>
              Cadastre-se
            </span>
            <img src="/assets/signUp.svg" alt="signUp" />
          </div>
        </a>
      </header>
    </>
  )
}