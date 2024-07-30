import Layout from "@/layouts/layout";
import FormBuild from '../components/formBuild/formBuild.jsx'

function Signinlawer() {
    return (<>
    <div className="text-center text-[30px]" >
        <h1 className="text mt-[100px]">Precisamos dessas Informaçoes pra concluir seu cadastro </h1>
        <div>
            <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">Nome Completo</h2>
            <input className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="text" placeholder="Seu nome"/>

            <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">CPF</h2>
            <input className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="text" placeholder="000.000.000-00"/>

            <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">Telefone</h2>
            <input className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="text" placeholder="(xx) xxxxx-xxxx"/>
        </div>
        <button className="text font-['Poppins',_sans-serif] w-[265px] bg-[#1557BB] text-white rounded-[9px] mt-5 text-[15px] h-[40px]">Continuar</button>
    </div>
    </>)
}

Signinlawer.layout = page => <Layout children={page} title={'SignIn'} fixedStatus={true} />

export default Signinlawer