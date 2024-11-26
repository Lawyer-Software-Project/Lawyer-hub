import { useState } from 'react';
import Button from '@/components/button/button';
import { router } from '@inertiajs/react';

function FormBuild({ imgSrc, imgAlt, mainTitle, bottomText, bottomLink, link, LinkPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/login', { usu_email: email, usu_password: password }, {
            headers: {
                'Content-Type': 'application/json',
            },
            onSuccess: () => console.log("Dados enviados com sucesso"),
        });
    };

    return (
        <>
            <div className="grid xl:grid-cols-2 h-[95vh]">
                <div className="overflow-hidden">
                    <img className="hidden xl:block h-full w-full bg-cover bg-left-top" src={imgSrc} alt={imgAlt} />
                </div>
                <div>
                    <div className="pt-[242px] pr-[155px] pb-[242px] pl-[155px] flex flex-col gap-2.5 items-center justify-center shrink-0 h-[832px] relative overflow-hidden">
                        <div className="text-[#000000] text-center mb-7 text-[40px] font-normal relative self-stretch">
                            {mainTitle}
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col mb-12">

                            <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            &nbsp;&nbsp;

                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mb-[20px]" />

                            <Button
                                text="Continuar"
                                width="300px"
                                height="50px"
                                type="submit"
                            />
                        </form>

                        <div>
                            <h1 className="font-bold text-left mb-3 mt-5">{bottomText}</h1>
                            <a className="text-[#4485E7] w-[300px] rounded-lg py-2 px-10 md:px-[85px] border border-[#4485E7]" href={LinkPage}>{bottomLink}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormBuild;
