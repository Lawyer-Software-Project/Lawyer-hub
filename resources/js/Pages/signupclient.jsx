import Layout from "@/layouts/layout";
import FormBuild from '../components/formBuild/formBuild.jsx'

function signupClient() {
    return (<>
    <div className="text-center h-[85vh] text-[30px]" >
        <h1 className="text">Precisamos dessas Informaçoes pra concluir seu cadastro </h1>
        <form>
            <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">Nome Completo</h2>
            <input required className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="text" placeholder="Seu Nome"/>
            <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">Email</h2>
            <input required className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="email" placeholder="Seu Email"/>
            <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">Senha</h2>
            <input required className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="password" placeholder="Sua Senha"/>

            <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">CPF</h2>
            <input required className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="text" placeholder="000.000.000-00"/>

            <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">Telefone</h2>
            <input required className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="text" placeholder="(xx) xxxxx-xxxx"/>
            <h2></h2>
        <button type="submit" className="text font-['Poppins',_sans-serif] w-[265px] bg-[#1557BB] text-white rounded-[9px] mt-5 text-[15px] h-[40px]">Continuar</button>
        
        </form>
    </div>
    </>)
}

signupClient.layout = page => <Layout children={page} title={'SignIn'} fixedStatus={true} />

export default signupClient