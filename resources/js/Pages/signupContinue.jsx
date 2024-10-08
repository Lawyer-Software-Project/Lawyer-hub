import Layout from "@/layouts/layout";
import Button from "@/components/button/button";

function Signin2()
{
    return(
        <>
        <div className="flex justify-center flex-col h-[84vh]">

            <div className="flex justify-center items-center mb-2">
                <h1 className="text-4xl">Advogado ou Cliente?</h1>
            </div>
            <div className="flex justify-center items-center">
                <Button
                text={'Advogado'}
                width={'160px'}
                height={'30px'}
                url={'/signuplawyer'}
                />
                &nbsp;&nbsp;
                <Button
                text={'Cliente'}
                width={'160px'}
                height={'30px'}
                url={'/signupclient'}
                />
            </div>
            <div className="flex justify-center items-center mt-2">
                Ja possui uma conta?&nbsp;<a className="text-[#4485E7]" href="/signin">Entrar</a>
            </div>
        </div>
        
        </>
    )
}
Signin2.layout = page => <Layout children={page} title={'SignIn'} fixedStatus={false} />

export default Signin2