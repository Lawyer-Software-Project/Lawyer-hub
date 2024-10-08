import Layout from "@/layouts/layout";
import FormBuild from '../components/formBuild/formBuild.jsx'

function Signup() {
  return (<>
    <FormBuild imgSrc={'/assets/signup/signupImage.png'} imgAlt={'signin'} mainTitle={'Crie sua conta'} bottomText={'Ja possui uma conta?'} bottomLink={'Entrar'} link={'/signin2'} LinkPage={'/signin'}/>
  
  </>)
}

Signup.layout = page => <Layout children={page} title={'SignUp'} fixedStatus={true} />

export default Signup

