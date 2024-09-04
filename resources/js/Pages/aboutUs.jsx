import Layout from "@/layouts/layout.jsx"
function aboutUs() {
    return (<>
        <div className="flex justify-center">
            <div className="w-[75%] h-[50%] flex rounded-xl mt-10 mb-10 bg-white">
                <div className="bg-[url(/assets/aboutus/aboutus.jpeg)] h-[90vh] w-[50%] bg-cover bg-center rounded-l-xl"></div>
                <div className="h-[90vh] w-[50%]">
                    <h1 className="text-3xl font-bold ml-10">Sobre a LAWYER’S®</h1>
                    <h2 className="text-xl ml-10 mt-10">Bem-vindo à LAWYERS®, uma firma de advocacia fundada por um <br />
                     grupo de advogados visionários com o objetivo claro de transformar o <br />
                      panorama jurídico. Nossa história é uma jornada de inovação e <br />
                       comprometimento, impulsionada pela busca incessante pela excelência e <br />
                        pelo serviço ao cliente</h2>
                    <h2 className="text-xl ml-10 mt-10">Na LAWYERS®, acreditamos que o direito pode e deve ser praticado de <br />
                     maneira mais eficiente, acessível e adaptada aos desafios do mundo <br />
                      moderno. Incorporamos tecnologia de ponta e abordagens inovadoras <br />
                       em todos os aspectos de nosso trabalho, garantindo soluções jurídicas <br />
                        eficazes e personalizadas.
                    </h2>
                    <h2 className="text-xl ml-10 mt-10">Se você está buscando assistência jurídica que vai além do convencional, <br />
                     a LAWYERS® está aqui para ajudar. Explore como nossa abordagem <br />
                      inovadora pode fazer a diferença para você ou sua empresa. Junte-se <br />
                       a nós em nossa missão de redefinir os padrões da advocacia moderna e <br />
                        descubra o que significa ter uma parceira confiável no mundo jurídico</h2>
                </div>
            </div>
        </div>
    </>)
}

aboutUs.layout = page => <Layout children={page} title={'About Us'} fixedStatus={false} />
export default aboutUs