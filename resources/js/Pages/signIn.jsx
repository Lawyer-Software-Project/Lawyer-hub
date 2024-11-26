import Layout from "@/layouts/layout.jsx";
import FormBuild from '../components/formBuild/formBuild.jsx'

function SignIn() {
    return (<>
        <FormBuild imgSrc={'/assets/signin/signinHammer.png'} imgAlt={'signin'} mainTitle={'Bem Vindo De Volta!'} bottomText={'Não tem conta?'} bottomLink={'Cadastre-se'} LinkPage={'/signup'} />        
    </>)
}

SignIn.layout = page => <Layout children={page} title={'SignIn'} fixedStatus={true} />

export default SignIn