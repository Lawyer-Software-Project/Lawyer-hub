import React, { useState } from "react";
import Layout from "@/Layouts/layout.jsx";
import { MdEmail } from "react-icons/md";
import InputMask from 'react-input-mask';

//ALGUEM TROCA A FONTE DO TEXTO PELO AMOR DE DEUS
function Profile() {
    const [isEditable, setIsEditable] = useState(false);

    const handleEditButtonClick = () => {
        setIsEditable(!isEditable);
    };

    return (
        <>
            <section className="min-h-screen -mt-10 flex justify-center items-center">
                <div className="h-[76vh] w-[60vw] bg-[#f4f4f4d8] rounded-lg mb-8">
                    <div className="w-full rounded-t-lg h-16 bg-gradient-to-r from-[#4485E7] to-[#8F8F8F] "></div>
                    <div id="container" className="pr-6 pl-6 ">
                        <div className="flex flex-row w-full mt-4">
                            <img className="w-[120px] rounded-full object-cover h-[120px]" src="/profile.jpg" alt="" />
                            <div className="flex flex-col ml-4 mt-4 flex-1">
                                <div className="mb-auto">
                                    <h1 className="text-2xl">Fulano da Silva</h1>
                                    <p className="font-light">email@email.com</p>
                                    <p className="font-bold">Advogado</p>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        id="edtButton"
                                        onClick={handleEditButtonClick}
                                        className="font-['Poppins',_sans-serif] -mt-20 w-[120px] bg-sky-500 text-white rounded-[9px] text-[15px] h-[40px]"
                                    >
                                        {isEditable ? "Salvar" : "Editar"}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 grid-cols-2">
                            <div className="flex flex-col">
                                <label className="text-[#555555] text-left self-start text-base font-normal">Nome Completo</label>
                                <input
                                    placeholder="Nome Completo"
                                    disabled={!isEditable}
                                    className="bg-[#eaeaea] border-0 rounded-md h-10"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#555555] text-left self-start text-base font-normal">Sua Senha</label>
                                <input
                                    placeholder="*************"
                                    disabled={!isEditable}
                                    className="bg-[#eaeaea] border-0 rounded-md h-10"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="mt-6 grid gap-4 grid-cols-2">
                            <div className="flex flex-col">
                                <label className="text-[#555555] text-left self-start text-base font-normal">Tipo Juridico</label>
                                <select
                                    className="bg-[#eaeaea] border-0 rounded-md h-10"
                                    disabled={!isEditable}
                                >
                                    <option value="1">teste</option>
                                    <option value="2">teste2</option>
                                    <option value="3">teste3</option>
                                    <option value="4">teste4</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#555555] text-left self-start text-base font-normal">Reg. OAB</label>
                                <InputMask
                                    required
                                    mask="aa999999"
                                    name="usu_oab"
                                    className="bg-[#eaeaea] border-0 rounded-md h-10"
                                    placeholder="UF999999"
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col justify-start">
                            <h1 className="font-semibold mb-1">Meu Email</h1>
                            <div className="flex flex-row items-center">
                                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#bdd4f6]">
                                    <MdEmail className="fill-sky-500"></MdEmail>
                                </div>
                                <p className="font-light ml-2">email@email.com</p>
                            </div>
                            <p className="text-red-500 -mt-2 font-semibold ml-10">Não Verificado</p>
                            <a className="bg-[#bdd4f6] rounded-lg text-center inline-block w-40 text-sky-500 font-semibold " href="#">Verificar</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Profile.layout = page => <Layout children={page} title={'Profile'} fixedStatus={true} />;

export default Profile;
