import Layout from "@/layouts/layout.jsx"
import { CasoLayout } from "@/components/casosLayout/casoLayout"

function cases() {
    return (
        <>
            <h1 className="text-3xl text-center pr-10 pt-5">Casos Mais Recentes</h1>
            <div className="min-h-screen pt-10 grid grid-cols-1 gap-y-5 gap-x-10 mb-20 lg:grid-cols-2 pl-10 pr-10">
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
                <CasoLayout></CasoLayout>
            </div>
            <div className="flex justify-center">
                <a className="bg-[#4485E7] p-2 w-[150px] rounded-lg text-white" href="#">Procurar Mais Casos</a>
            </div>

        </>
    )
}
cases.layout = page => <Layout children={page} title={'Cases'} fixedStatus={false} />

export default cases