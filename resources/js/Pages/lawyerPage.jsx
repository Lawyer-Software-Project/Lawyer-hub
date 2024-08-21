import Layout from "@/layouts/layout.jsx";

function LawyerPage() {

    return (<>
        <div className="h-[50vh] flex justify-center items-center">
            <div className="grid grid-cols-2 h-[10vh] items-center gap-x-32 text-3xl">
                <h1 className="justify-self-end self-start">Procurando trabalho?</h1>
                <h1 className="self-end justify-self-end" >Na Lawyer's tem</h1>
            </div>
        </div>
        <div className="bg-[url(/assets/lawyerPage/lawyerHammer.png)] w-full h-[60vh] bg-no-repeat bg-cover bg-center items-center flex justify-center">
            <div className="h-[50vh] flex justify-center items-center text-white    ">
                <div className="grid grid-cols-2 h-[10vh] items-center gap-x-10 text-3xl z-[2] p-[10%]">
                    <h1 className="justify-self-end self-start">Na Lawyer's procuramos apenas os profissionais mais qualificados </h1>
                    <h1 className="self-end justify-self-end">Cadastre-se, e consiga trabalho HOJE</h1>
                </div>
            </div>
        </div>
    </>);
}

LawyerPage.layout = page => <Layout children={page} title={'lawyerPage'} fixedStatus={false} />;

export default LawyerPage;