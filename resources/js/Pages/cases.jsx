import Layout from "@/layouts/layout.jsx";
import { CasoLayout } from "@/components/casosLayout/casoLayout";
import { useEffect, useState } from "react";
import axios from 'axios';

function Cases() {
    const [cases, setCases] = useState([]); // Dados originais
    const [filteredCases, setFilteredCases] = useState([]); // Dados filtrados
    const [searchTerm, setSearchTerm] = useState(""); // Termo de pesquisa

    useEffect(() => {
        const findCases = async () => {
            try {
                const response = await axios.get('/findcases'); // Obtém os dados do backend
                setCases(response.data); // Atualiza o estado original
                setFilteredCases(response.data); // Atualiza o estado filtrado
            } catch (error) {
                console.error("Erro ao buscar casos:", error);
            }
        };
        findCases();
    }, []);

    // Atualiza os casos filtrados sempre que o termo de pesquisa muda
    useEffect(() => {
        if (searchTerm === "") {
            setFilteredCases(cases); // Mostra todos os casos se o termo de pesquisa estiver vazio
        } else {
            setFilteredCases(
                cases.filter(caseItem =>
                    caseItem.case_desc_short.toLowerCase().includes(searchTerm.toLowerCase()) || // Busca pela descrição
                    caseItem.case_desc_long.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    new Date(caseItem.created_at).toLocaleDateString().includes(searchTerm) // Busca pela data
                )
            );
        }
    }, [searchTerm, cases]);

    return (
        <>
            <h1 className="text-3xl text-center pt-5">Casos Mais Recentes</h1>
            {/* Barra de Pesquisa */}
            <div className="text-center mt-5">
                <input
                    type="text"
                    placeholder="Buscar casos..."
                    className="border rounded-lg px-4 py-2"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)} // Atualiza o termo de pesquisa
                />
            </div>

            {/* Casos Filtrados */}
            <div className="min-h-screen pt-10 grid grid-cols-1 gap-y-5 gap-x-10 mb-20 lg:grid-cols-2 pl-10 pr-10">
                {filteredCases.map((caseItem) => (
                    <CasoLayout 
                        key={caseItem.id} 
                        desc_case={caseItem.case_desc_long} 
                        case_date={new Date(caseItem.created_at).toLocaleDateString()} 
                        tittle_case={caseItem.case_desc_short}
                    />
                ))}
            </div>
        </>
    );
}
Cases.layout = page => <Layout children={page} title={'Cases'} fixedStatus={false} />;

export default Cases;
