function clientCard() {
    return (<>
        <div className="container mx-auto px-4 mb-[8vh]">
            <div className="flex justify-center">
                <h1 className="text-[32px] mt-20 font-bold border-b-4 border-[#1557BB]">COMO FUNCIONA</h1>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img
                        src="/assets/clientpage/clientpicture.jpeg"
                        alt="Descrição da Imagem"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="font-semibold">Publique seu caso anonimamente</h2>
                        <p className="text-gray-600 mt-2">
                            Publique seu caso anonimamente descrevendo sua situação e seu tipo de especialização.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="font-semibold">Receba propostas de advogados</h2>
                        <p className="text-gray-600 mt-2">
                            Receba propostas de advogados verificados, converse com eles e selecione o melhor para seu caso.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="font-semibold">Publique seu caso anonimamente</h2>
                        <p className="text-gray-600 mt-2">
                            Publique seu caso anonimamente descrevendo sua situação e seu tipo de especialização.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="font-semibold">Receba propostas de advogados</h2>
                        <p className="text-gray-600 mt-2">
                            Receba propostas de advogados verificados, converse com eles e selecione o melhor para seu caso.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default clientCard