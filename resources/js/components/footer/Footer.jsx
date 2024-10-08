import Logo from '../logo/logo.jsx'

export default function Footer({ fixedStatus }) {

    let fixed;
    if (fixedStatus === true) {
        fixed = {
            position: 'fixed',
            bottom: 0,
            width: '100%',
            overflow: 'hidden',
        }
    } else if (fixedStatus === false) {
        fixed = {

        }
    } else {
        alert("fixedStatus must be true or false in Footer.jsx")
    }

    return (
        <>
            <footer className="bg-[#ffffff] pt-5 pr-[5%] pb-5 pl-[5%] flex flex-row gap-2.5 shrink-1 items-center justify-between object-bottom shadow-inner"
                style={
                    fixed
                }
            >
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