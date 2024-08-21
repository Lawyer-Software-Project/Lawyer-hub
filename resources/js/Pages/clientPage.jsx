import Layout from "@/layouts/layout.jsx";
import ClientCard from "../components/clientpage/clientcard.jsx";

function ClientPage() {
    return (
        <>
            <div className="bg-[url('/assets/clientpage/clientpage.jpeg')] w-[100%] h-[90vh] bg-cover bg-center">
                <div className="flex justify-center flex-col h-[100%]">
                    <h1 className="text-[50px] ml-40">Se você tem um problema <br />
                        Os advogados da LAWYER’S <br />
                        podem resolver </h1>
                </div>
            </div>
            <ClientCard />         
        </>
    );
}

ClientPage.layout = page => <Layout children={page} title={'Cases'} fixedStatus={false} />

export default ClientPage