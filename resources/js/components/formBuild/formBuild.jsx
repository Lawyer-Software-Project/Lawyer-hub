import Button from '@/components/button/button'
import Input from '@/components/input/Input'

function FormBuild({ imgSrc, imgAlt, mainTitle, url }) {
    return (<>
        <div className="grid grid-cols-2 h-[95vh]">
            <div className="overflow-hidden">
                <img className="h-full w-full bg-cover bg-left-top" src={imgSrc} alt={imgAlt} />
            </div>
            <div>
                <div className="pt-[242px] pr-[155px] pb-[242px] pl-[155px] flex flex-col gap-2.5 items-center justify-center shrink-0 h-[832px] relative overflow-hidden ">
                    <div className="text-[#000000] text-center mb-7 font-['CrimsonText-Regular',_sans-serif] text-[40px] font-normal relative self-stretch">
                        {mainTitle}
                    </div>
                    <div className="flex flex-col mb-12 ">
                        <Input
                            label={'Email ou CPF'}
                            width={'300px'}
                            height={'30px'}
                            placeholder={'000.000.000-00'}
                        />
                        &nbsp;&nbsp;
                        <Input
                            label={'Password'}
                            width={'300px'}
                            height={'30px'}
                            placeholder={'***********'}
                        />
                    </div>
                    <Button
                        text={'Cadastrar'}
                        width={'300px'}
                        height={'50px'}
                        url={'#'}
                    />
                    <div>
                        <h1 className="font-bold text-left mb-3 mt-5">Ja tem conta?</h1>
                        <a className="text-[#4485E7] w-[300px] rounded-lg py-2 px-[85px] border border-[#4485E7]" href={url}>Entre na sua Conta</a>
                    </div>
                </div>

            </div>
        </div>
    </>)
}

export default FormBuild