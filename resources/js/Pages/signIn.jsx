import Layout from '../layouts/layout.jsx'

function SignIn() {
    return (<>
        <h1>Login</h1>
    </>)
}

SignIn.layout = page => <Layout children={page} title={'Login'} />

export default SignIn