import Layout from "@/layouts/layout.jsx"
import Card from '../components/home/card/card.jsx'



function Home() {
    return (<>
        <div>
            <div className="grid">
                <h2 className="absolute z-10 self-center text-white text-5xl w-[40%] m-[8%]">“Na advocacia moderna, inovar é ser pioneiro na defesa dos direitos e na busca por justiça.”</h2>
                <img src="/assets/home/mainHome.png" alt="mainImg"
                    className="w-full h-[75vh] object-cover object-left-top overflow-hidden brightness-75" />
            </div>

            <div className="m-16 text-end">
                <h1 className="text-3xl border-b-4 border-[#1557BB] inline">Transformando a busca por advogados em uma experiência simples e acessível.</h1>
            </div>

            <div className="flex justify-center gap-10 m-16">
                <Card
                    linkPath={'/lawyerpage'}
                    imagePath="/assets/home/hammerLawyer.jpg"
                    title="Advogados"
                    description="Conheça Advogados verificados e dispostos a trabalhar para lidar com seu problema."
                />
                <Card
                    linkPath={'/clientpage'}
                    imagePath="/assets/home/lawyers.jpeg"
                    title="Clientes"
                    description="Acesse nosso site e conheça os casos que foram publicados por nossos clientes."
                />
                <Card
                    linkPath={'/aboutus'}
                    imagePath="/assets/home/bestOfTwo.jpeg"
                    title="Loren Ipsun"
                    description="Loren Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>

        </div>
    </>)
}

Home.layout = page => <Layout children={page} title={'Home'} fixedStatus={false} />

export default Home