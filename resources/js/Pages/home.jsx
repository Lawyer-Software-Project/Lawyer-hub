import Layout from "@/layouts/layout.jsx";
import Card from "../components/home/card/card.jsx";
// import Button from "@/components/button/button.jsx";
import CallToAction from "@/components/home/calltoActionSection/calltoActionSection.jsx"; '../components/home/calltoActionSection/calltoActionSection.jsx'
import Newsletter from "@/components/home/newsletter/newsletter.jsx"; '../components/home/newsletter/newsletter.jsx'

function Home() {
    return (
        <>
            <div>
                <div className="grid">
                    <div className="absolute z-10 self-center grid grid-cols-2 text-white text-5xl m-[8%]">

                        <h2 className=" justify-self-center">
                            “Na advocacia moderna, inovar é ser pioneiro na defesa dos direitos e na busca por justiça.”
                        </h2>

                        <div className="self-end justify-self-center">
                            <a href='/signup'>
                                <button className="bg-[#1557BB] text-white rounded-[9px] hover:scale-105 transition-all text-2xl w-[350px] h-[4vh]">
                                    Cadastre-se e veja os planos!
                                </button>
                            </a>
                        </div>

                    </div>

                    <img
                        src="/assets/home/mainHome.png"
                        alt="mainImg"
                        className="w-full h-[75vh] object-cover object-left-top overflow-hidden brightness-75"
                    />
                </div>

                <div className="m-16 text-end">
                    <h1 className="text-3xl border-b-4 border-[#1557BB] inline">
                        Transformando a busca por advogados em uma experiência simples e acessível.
                    </h1>
                </div>

                <div className="flex justify-center gap-10 m-16">
                    <Card
                        linkPath={"/lawyerpage"}
                        imagePath="/assets/home/hammerLawyer.jpg"
                        title="Advogados"
                        description="Conheça Advogados verificados e dispostos a trabalhar para lidar com seu problema."
                    />
                    <Card
                        linkPath={"/clientpage"}
                        imagePath="/assets/home/lawyers.jpeg"
                        title="Clientes"
                        description="Acesse nosso site e conheça os casos que foram publicados por nossos clientes."
                    />
                    <Card
                        linkPath={"/aboutus"}
                        imagePath="/assets/home/bestOfTwo.jpeg"
                        title="Nossa Missão"
                        description="Nosso objetivo é conectar clientes com advogados especializados, tornando o processo jurídico mais acessível e eficiente."
                    />
                </div>

                {/* Testimonials Section */}
                <div className="bg-white p-16">
                    <h2 className="text-3xl text-center mb-8">O que nossos clientes dizem</h2>
                    <div className="flex justify-center gap-10">
                        <div className="bg-white p-8 shadow-md">
                            <p className="text-lg italic">"Excelente serviço, encontrei o advogado perfeito para o meu caso!"</p>
                            <p className="mt-4 text-right">- João Silva</p>
                        </div>
                        <div className="bg-white p-8 shadow-md">
                            <p className="text-lg italic">"Muito fácil de usar e os advogados são de alta qualidade."</p>
                            <p className="mt-4 text-right">- Maria Oliveira</p>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription Section */}
                <Newsletter />

                {/* Call to Action Section */}
                <CallToAction />




            </div>
        </>
    );
}

Home.layout = (page) => <Layout children={page} title={"Home"} fixedStatus={false} />;

export default Home;
