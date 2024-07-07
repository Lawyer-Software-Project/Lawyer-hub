export default function Header() {
  return (
    <>
      <header className="flex h-[5vh] justify-between items-center pl-[5%] pr-[5%] shadow-sm">

        <h1 className="text-[rgb(0,0,0)] font-['CrimsonText-Regular',static] text-2xl font-normal">
          <a href="/">
            LAWYER’S
          </a>
        </h1>

        <div className="flex flex-row gap-2">
          <span>
            Cadastre-se
          </span>
          <img src="/assets/signUp.svg" alt="signUp" />
        </div>

      </header>
    </>
  )
}