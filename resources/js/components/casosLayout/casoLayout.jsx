import Button from "../button/button";

export const CasoLayout = ({ short_desc, case_date }) => {
  return (
    <div className="shadow-lg rounded-lg max-h-52">
      <header className="sticky top-0 bg-[#4485E7] text-white h-[25px] rounded-t-lg flex justify-between px-4 sm:px-10">
        <h1 className="text-sm sm:text-base">Titulo do caso</h1>
        <span className="text-sm sm:text-base">{case_date}</span>
      </header>
      <main className="flex flex-col sm:flex-row justify-between items-center h-fit p-5 gap-4">
        <p className="text-xs sm:text-sm text-left max-h-fit w-full sm:w-[70%] overflow-ellipsis overflow-hidden">
          {short_desc}
        </p>
        <a
          href="#"
          className="bg-[#4485e7] rounded-lg flex items-center justify-center shrink-0 w-full sm:w-32 h-[38px]"
        >
          <span className="text-white text-center text-sm sm:text-base leading-normal font-normal flex items-center justify-start">
            Enviar Proposta
          </span>
        </a>
      </main>
    </div>
  );
};
