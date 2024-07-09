import Layout from "@/layouts/layout";
import FormBuild from '../components/formBuild/formBuild.jsx'

function Signup() {
  return (<>
    <FormBuild imgSrc={'/assets/signup/signupImage.png'} imgAlt={'signin'} mainTitle={'Crie sua conta'} url={'/signin'} />
  
  </>)
}

Signup.layout = page => <Layout children={page} title={'SignUp'} fixedStatus={true} />

export default Signup

