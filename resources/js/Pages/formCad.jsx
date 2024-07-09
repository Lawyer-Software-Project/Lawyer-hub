import Layout from "@/layouts/layout";
import Button from '@/components/button/button'
import Input from '@/components/input/Input'


function cadForm({advogado})
{
    if(advogado == true)
    {
        return(
            <>
                <div className="flex justify-center flex-col ">
                    <h1 className="text-center text-3xl mt-[25vh]">Precisamos dessas informaçoes para concluir seu cadastro</h1>
                        <div className="self-center mt-10">
                            <Input label={'Nome Completo'} width={'300px'} height={'35px'}/>
                            <Input label={'Numero OAB'} width={'300px'} height={'35px'}/>
                            <Input label={'CPF'} width={'300px'} height={'35px'}/>
                            <Input label={'Telefone'} width={'300px'} height={'35px'}/>
                            
                        </div>
                <div className="self-center mt-10">
                    <Button text={'Continuar'} height={'35px'} width={'150px'}/>
                </div>
                </div>
            
            </>
        )
    }
    if(advogado == false)
    {
        return(
            <>
            <div className="flex justify-center flex-col ">
                    <h1 className="text-center text-3xl mt-[25vh]">Precisamos dessas informaçoes para concluir seu cadastro</h1>
                        <div className="self-center mt-10">
                            <Input label={'Nome Completo'} width={'300px'} height={'35px'}/>
                            <Input label={'CPF'} width={'300px'} height={'35px'}/>
                            <Input label={'Telefone'} width={'300px'} height={'35px'}/>
                            
                        </div>
                <div className="self-center mt-10">
                    <Button text={'Continuar'} height={'35px'} width={'150px'}/>
                </div>
                </div>
            </>
        )
    }
}
cadForm.layout = page => <Layout children={page} title={'SignUp'} fixedStatus={true} />

export default cadForm