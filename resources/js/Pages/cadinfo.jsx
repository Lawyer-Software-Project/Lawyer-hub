import Layout from "@/layouts/layout";
import Button from '@/components/button/button'


function CadInfo()
{
    return(
        <>
            <div className="flex justify-center">
                <h1 className="text-center text-2xl">Advogado ou Cliente?</h1>

            </div>
        
        </>
    )
}
CadInfo.layout = page => <Layout children={page} title={'SignUp'} fixedStatus={true} />

export default CadInfo