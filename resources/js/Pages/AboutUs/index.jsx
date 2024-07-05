import React from "react";

export default function AboutUs()
{
    return(
        <>
        <div className="flex w-[80%] rounded-[8px] bg-[#D9D9D9]">
        <div className="w-1/2"><img className="rounded-l-lg w-1/1 h-[100%]" src="paleto.png"  alt=""/></div> {/* esquerda  */}
        <div className="w-1/2">
            <h1 className="mt-[15px] ml-[2vw]">Sobre a Lawyer's®</h1>
            <p className="text-xl mt-[30px] ml-[2vw] w-[560px]">
                Bem-vindo à LAWYER'S®, uma firma de advocacia fundada por um 
               grupo de advogados visionários com o objetivo claro de <span className="text-[#1557BB]">transformar</span> o
               panorama jurídico. Nossa história é uma jornada de <span className="text-[#1557BB]">inovação</span> e
               <span className="text-[#1557BB]">comprometimento</span>, impulsionada pela busca incessante pela excelência e
               pelo serviço ao cliente.
            </p>

            <p className="text-xl mt-[30px] ml-[2vw] w-[560px]">
                Na LAWYER'S®, acreditamos que o direito pode e deve ser praticado de
                maneira mais <span className="text-[#1557BB]">eficiente</span>, <span className="text-[#1557BB]">acessível</span> e <span className="text-[#1557BB]">adaptada</span> aos desafios do mundo
                moderno. Incorporamos tecnologia de ponta e abordagens inovadoras
                em todos os aspectos de nosso trabalho, garantindo soluções jurídicas
                <span className="text-[#1557BB]">eficazes</span> e personalizadas.
            </p>
                
            <p className="text-xl mt-[30px] ml-[2vw] w-[560px]">
                Se você está buscando assistência jurídica que vai além do convencional,
                a LAWYER'S® está aqui para ajudar. Explore como nossa abordagem
                <span className="text-[#1557BB]">inovadora</span> pode fazer a diferença para você ou sua empresa. Junte-se a
                nós em nossa missão de redefinir os padrões da advocacia moderna e
                descubra o que significa ter uma parceira <span className="text-[#1557BB]">confiável</span> no mundo jurídico.
            </p>
        </div>
    </div>
        </>
    )
}