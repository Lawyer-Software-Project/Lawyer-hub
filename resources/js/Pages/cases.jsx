import Layout from "@/layouts/layout.jsx";
import { CasoLayout } from "@/components/casosLayout/casoLayout";
import { useEffect, useState } from "react";
import axios from 'axios';

function Cases() {
    const [cases, setCases] = useState([]); // Estado para armazenar os casos

    useEffect(() => {
        const findCases = async () => {
            try {
                const response = await axios.get('/findcases'); // Use axios para obter os dados
                setCases(response.data); // Atualize o estado com os dados recebidos
            } catch (error) {
                console.error("Erro ao buscar casos:", error);
            }
        };
        findCases();
    }, []);

    return (
        <>
            <h1 className="text-3xl text-center pr-10 pt-5">Casos Mais Recentes</h1>
            <div className="min-h-screen pt-10 grid grid-cols-1 gap-y-5 gap-x-10 mb-20 lg:grid-cols-2 pl-10 pr-10">
                {cases.map((caseItem) => (
                    <CasoLayout 
                        key={caseItem.id} 
                        short_desc={caseItem.case_desc_short} 
                        case_date={new Date(caseItem.created_at).toLocaleDateString()} 
                    />
                ))}
            </div>
            <div className="flex justify-center">
                <a className="bg-[#4485E7] p-2 w-[150px] rounded-lg text-white" href="#">Procurar Mais Casos</a>
            </div>
        </>
    );
}
Cases.layout = page => <Layout children={page} title={'Cases'} fixedStatus={false} />;

export default Cases;
