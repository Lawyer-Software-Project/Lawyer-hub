import React, { useState, useEffect } from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import Layout from "@/layouts/layout.jsx";

function Plans() {
    const [currentPlan, setCurrentPlan] = useState(""); // Armazena o plano atual do usuário
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

    const plans = [
        { name: "Tier Free", price: "Grátis", description: "Plano básico com funcionalidades limitadas." },
        { name: "Tier 1", price: "R$ 29,90/mês", description: "Acesso completo a ferramentas padrão." },
        { name: "Tier 2", price: "R$ 49,90/mês", description: "Plano premium com suporte prioritário." },
    ];

    useEffect(() => {
        fetchCurrentPlan();
    }, []);

    const fetchCurrentPlan = async () => {
        try {
            const response = await axios.get("/currentuser");
            setCurrentPlan(response.data.plan || "Tier Free");
        } catch (err) {
            console.error("Erro ao buscar plano atual:", err);
        }
    };

    const handleSelectPlan = async (plan) => {
        if (plan === "Tier Free") {
            alert("Você já está no plano gratuito!");
            return;
        }

        try {
            setIsLoading(true);
            // Envia o plano para o backend
            const response = await axios.post("/selectplan", { plan });

            if (response.status === 200) {
                // Redireciona para a página de pagamento ao sucesso
                window.location.href = `/payment?plan=${plan}`;
            } else {
                alert("Erro ao selecionar o plano. Tente novamente.");
            }
        } catch (err) {
            console.error("Erro ao selecionar plano:", err.response?.data || err.message);
            alert("Erro ao selecionar o plano. Verifique sua conexão e tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <section className="min-h-screen flex-col flex justify-center items-center">
                <p>Carregando...</p>
                <PuffLoader />
            </section>
        );
    }

    return (
        <section className="min-h-[87vh] flex flex-col justify-center items-center bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Escolha seu Plano</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`border rounded-lg p-6 shadow-lg ${
                            currentPlan === plan.name ? "border-[#1557BB]" : "border-gray-300"
                        }`}
                    >
                        <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                        <p className="text-xl font-semibold text-gray-700 mb-4">{plan.price}</p>
                        <p className="text-gray-600 mb-6">{plan.description}</p>
                        <button
                            onClick={() => handleSelectPlan(plan.name)} // Envia o plano selecionado
                            className={`w-full py-2 px-4 rounded-lg ${
                                currentPlan === plan.name
                                    ? "bg-[#1557BB] text-white cursor-not-allowed"
                                    : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                            }`}
                            disabled={currentPlan === plan.name}
                        >
                            {currentPlan === plan.name ? "Plano Atual" : "Selecionar"}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

Plans.layout = (page) => <Layout children={page} fixedStatus={false} />;

export default Plans;
