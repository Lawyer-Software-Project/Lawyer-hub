const Newsletter = () => {
    return (
        <div className="bg-gradient-to-b from-white to-[#1557BB] text-white p-16 text-center">
            <h2 className="text-3xl mb-4">Assine nossa newsletter</h2>
            <p className="mb-8">Receba atualizações e novidades diretamente no seu email.</p>
            <form className="flex justify-center gap-4">
                <input
                    type="email"
                    placeholder="Seu email"
                    className="p-2 text-black rounded"
                />
                <button type="submit" className="bg-white text-blue-500 p-2 rounded">Inscrever-se</button>
            </form>
        </div>
    );
};

export default Newsletter;
