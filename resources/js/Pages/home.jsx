import Layout from '../layouts/layout.jsx'

function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

Home.layout = page => <Layout children={page}/>

export default Home