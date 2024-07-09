import Layout from "@/layouts/layout";
import Button from '@/components/button/buttonInfo'


function CadInfo()
{
    return(
        <>
            <div className="flex justify-center flex-col ">
                <h1 className="text-center text-2xl mt-[30vh]">Advogado ou Cliente?</h1>
                    <div className="self-center mt-3">
                        <Button text={'Advogado'} width={'300px'} height={"40px"} advogado={true}/>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Button text={'Cliente'} width={'300px'} height={"40px"} advogado={false}/>
                    </div>
            </div>
        
        </>
    )
}
CadInfo.layout = page => <Layout children={page} title={'SignUp'} fixedStatus={true} />

export default CadInfo