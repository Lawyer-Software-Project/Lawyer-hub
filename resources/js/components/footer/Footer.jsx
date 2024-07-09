import Logo from '../logo/logo.jsx'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#ffffff] pt-5 pr-[5%] pb-5 pl-[5%] flex flex-row gap-2.5 shrink-1 items-center justify-between relative overflow-hidden shadow-inner">

                <Logo />

                <div className="flex flex-row gap-3 float-right">
                    <a href="/aboutus" className="text-[#000000] text-left font-['Crimson Text',serif] text-[2.1vw] xl:text-[1vw] font-normal relative">
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