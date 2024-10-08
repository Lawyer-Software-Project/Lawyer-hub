import Button from "../button/button";

export const CasoLayout = () => {
  return (
   <div className="shadow-lg rounded-lg max-h-52">
    <header className="sticky top-0 bg-[#4485E7] text-white h-[25px] rounded-t-lg flex justify-between pr-10 pl-10">
      <h1>Titulo do caso</h1>
      <span>20/12/2000</span>
    </header>
    <main className="flex justify-evenly items-center h-fit p-5">
    <p className="text-sm text-left max-h-fit w-[500px] overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nisl dui. Ut eu felis ullamcorper, pretium nisi pharetra, sodales risus. Suspendisse tempor tellus ac est lacinia hendrerit. Curabitur neque tortor, volutpat nec aliquet et, suscipit in purus. Duis bibendum, dui in vestibulum bibendum, odio libero ornare elit, a posuere diam sem in odio. </p>
    <a href="#" className="bg-[#4485e7] rounded-lg flex items-center justify-center shrink-0 w-32 h-[38px] ">
      <span className="text-[#ffffff] text-center text-base leading-normal font-normal flex items-center justify-start">
        Enviar Proposta
      </span>
      </a>
    </main>
   </div>
  );
};
