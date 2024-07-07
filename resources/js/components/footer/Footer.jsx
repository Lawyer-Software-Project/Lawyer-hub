export default function Footer() {
    return (
        <>
            <footer className="bg-[#ffffff] pt-5 pr-[5%] pb-5 pl-[5%] flex flex-row gap-2.5 shrink-1 items-center justify-between relative overflow-hidden shadow-inner">

                <div className="text-[rgb(0,0,0)] text-left font-['CrimsonText-Regular',static] text-2xl font-normal relative">
                    LAWYER’S
                {/* <img className="shrink-0 w-3 h-3 relative overflow-visible" src="./trademark-circle-outlined0.svg" /> */}
                </div>

                <div className="flex flex-row gap-3 float-right">
                    <a href="/aboutUs" className="text-[#000000] text-left font-['Crimson Text',serif] text-[2.1vw] xl:text-[1vw] font-normal relative">
                        Sobre nós
                    </a>
                    <a href="#" className="text-[#000000] text-left font-['Crimson Text',serif] text-[2.1vw] xl:text-[1vw] font-normal relative">
                        Termos de Serviço
                    </a>
                    <a href="#" className="text-[#000000] text-left font-['Crimson Text',serif] text-[2.1vw] xl:text-[1vw] font-normal relative">
                        Redes Sociais
                    </a>
                </div>
            </footer>
        </>
    )

}