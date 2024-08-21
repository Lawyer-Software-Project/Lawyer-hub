import Layout from "@/layouts/layout.jsx"

function FormCases(){
    return(
        <>
            <div className="h-screen flex flex-col items-center">
                <h1 className="text-4xl mt-32">Digite seu Caso</h1>
                <form action="">
                    <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-5 text-gray-600">Descrição Breve do caso</h2>
                    <input className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]" type="text"/>
                    <h2 className="text font-['Poppins',_sans-serif] text-[15px] text-gray-600">Selecione o tipo do Caso</h2>
                    <select className="input rounded-lg border-none bg-[#e6ebf3] w-[300px] text font-['Poppins',_sans-serif] text-[15px]">
                        <option value="opcao1">opcao1</option>
                        <option value="opcao2">opcao2</option> 
                        <option value="opcao3">opcao3</option> 
                        <option value="opcao4">opcao4</option> 
                    </select>
                    <h2 className="text font-['Poppins',_sans-serif] text-[15px] text-gray-600">Descrição do caso</h2>
                    <textarea className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] min-h-52"></textarea>
                </form>    
                    <button type="submit" className="text font-['Poppins',_sans-serif] w-[265px] bg-[#1557BB] text-white rounded-[9px] mt-5 text-[15px] h-[40px]">Enviar Caso</button>


            </div> 
       </>
    )
}

FormCases.layout = page => <Layout children={page} title={'Cases'} fixedStatus={false} />
export default FormCases