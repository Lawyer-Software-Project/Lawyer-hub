import Layout from "@/layouts/layout";
import FormBuild from '../components/formBuild/formBuild.jsx'

function SignIn() {
    return (<>
        <FormBuild imgSrc={'/assets/signin/signinHammer.png'} imgAlt={'signin'} mainTitle={'Bem Vindo De Volta!'} />        
    </>)
}

SignIn.layout = page => <Layout children={page} title={'SignIn'} fixedStatus={true} />

export default SignIn