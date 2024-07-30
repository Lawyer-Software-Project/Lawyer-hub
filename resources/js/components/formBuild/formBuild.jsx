import { useState } from 'react';
import Button from '@/components/button/button';
import Input from '@/components/input/Input';
import { router } from '@inertiajs/react';

function FormBuild({ imgSrc, imgAlt, mainTitle, bottomText, bottomLink, link}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/store', { email, password }, {
            onSuccess: () => {
                router.visit(link); // Redireciona para a página desejada após a submissão bem-sucedida
            }
        });
    };

    return (
        <>
            <div className="grid grid-cols-2 h-[95vh]">
                <div className="overflow-hidden">
                    <img className="h-full w-full bg-cover bg-left-top" src={imgSrc} alt={imgAlt} />
                </div>
                <div>
                    <div className="pt-[242px] pr-[155px] pb-[242px] pl-[155px] flex flex-col gap-2.5 items-center justify-center shrink-0 h-[832px] relative overflow-hidden">
                        <div className="text-[#000000] text-center mb-7 font-['CrimsonText-Regular',_sans-serif] text-[40px] font-normal relative self-stretch">
                            {mainTitle}
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col mb-12">
                           {/*  <Input 
                                id="email" 
                                label="E-mail" 
                                width="300px" 
                                height="30px" 
                                placeholder="email@example.com" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            /> */}
                            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            &nbsp;&nbsp;
                           {/*  <Input 
                                id="password" 
                                label="Password" 
                                width="300px" 
                                height="30px" 
                                placeholder="***********" 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            /> */}

                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-[20px]"/>

                            <Button
                                text="Cadastrar"
                                width="300px"
                                height="50px"
                                type="submit"
                            />
                        </form>

                        <div>
                            <h1 className="font-bold text-left mb-3 mt-5">{bottomText}</h1>
                            <a className="text-[#4485E7] w-[300px] rounded-lg py-2 px-[85px] border border-[#4485E7]" href="#">{bottomLink}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormBuild;
