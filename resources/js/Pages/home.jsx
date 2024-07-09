import Layout from "@/layouts/layout.jsx"
import Card from '../components/home/card/card.jsx'
import Button from '../components/button/button.jsx'

function Home() {
    return (<>
        <div>
            <div className="grid">
                <h2 className="absolute z-10 self-center text-white text-5xl w-[40%] m-[8%]">“Na advocacia moderna, inovar é ser pioneiro na defesa dos direitos e na busca por justiça.”</h2>
                <img src="/assets/home/mainHome.png" alt="mainImg"
                    className="w-full h-[75vh] object-cover object-left-top overflow-hidden brightness-75" />
            </div>

            <Card
                title={'Advogados Qualificados e Verificados para ajudar no seu Problema!'}
                imageSrc={'/assets/home/lawyer.png'}
                position={'ImageRight'}
                colorWords={['Qualificados', 'Verificados', 'Problema!']}
                description={'Conecte-se com diversos advogados de diferentes áreas de todo o Brasil!'}
            />

            <Card
                title={'Velocidade na resolução do seu Problema!'}
                imageSrc={'/assets/home/speed.png'}
                position={'ImageLeft'}
                colorWords={['Velocidade', 'Problema!']}
                description={'Resolva seu caso com mais rapidez, sem demora exagerada para encontrar advogados!'}
            />

            <div className="flex justify-center m-[5vh]">
                <Button
                    text={'Começar!'}
                    width={'250px'}
                    height={'50px'}
                    href={'/signin'}
                />
            </div>
        </div>
    </>)
}

Home.layout = page => <Layout children={page} title={'Home'} fixedStatus={false} />

export default Home