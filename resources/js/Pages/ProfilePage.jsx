import React, { useState, useEffect } from "react";
import Layout from "@/layouts/layout.jsx";
import { MdEmail } from "react-icons/md";
import InputMask from 'react-input-mask';
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import { FaScaleBalanced } from "react-icons/fa6";

function Profile() {
    const [isEditable, setIsEditable] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Adiciona estado de carregamento
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        role: "",
        cpf: "",
        juridicoType: "",
        oab: "",
        emailVerified: false,
    });

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => { // Transformar em função assíncrona
        try {
            const res = await axios.get('/currentuser');
            console.log(res.data);
            setUserData({
                name: res.data.name || "",
                email: res.data.email || "",
                role: res.data.role || "",
                cpf: res.data.cpf || "",
                juridicoType: res.data.juridicoType || "",
                oab: res.data.oab || "",
                //emailVerified: res.data.emailVerified || false,
            });
        } catch (err) {
            console.error("Error fetching user data:", err);
        } finally {
            setIsLoading(false); // Finaliza o carregamento após a resposta ou erro
        }
    };
    const sendVerificationEmail = async () => {
        try {
            const response = await axios.post('/testemail');
            alert(response.data.message); // Exibe mensagem de sucesso
        } catch (error) {
            console.error("Erro ao enviar e-mail de verificação:", error);
            alert("Não foi possível enviar o e-mail de verificação.");
        }
    };
    
    const handleEditButtonClick = () => {
        setIsEditable(!isEditable);
    };

    if (isLoading) { // Renderização condicional com indicador de carregamento
        return (
            <section className="min-h-screen flex-col flex justify-center items-center">
                <p className="block">Carregando...</p>
                <PuffLoader />
            </section>
        );
    }

    return (
        <>
            <section className="min-h-[125vh] -mt-32 flex justify-center items-center">
                <div className="h-[76vh] w-[60vw] bg-[#f4f4f4d8] rounded-lg mb-8">
                    <div className="w-full rounded-t-lg h-16 bg-gradient-to-r from-[#4485E7] to-[#8F8F8F] "></div>
                    <div id="container" className="pr-6 pl-6">
                        <div className="flex flex-row w-full mt-4">
                            <img onClick={getUserData} className="w-[120px] rounded-full object-cover h-[120px]" src="/profile.jpg" alt="" />
                            <div className="flex flex-col ml-4 mt-4 flex-1">
                                <div className="mb-auto">
                                    <h1 className="text-2xl">{userData.name}</h1>
                                    <p className="font-light">{userData.email}</p>
                                    <p className="font-bold">{userData.role}</p>
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
                                <label className="text-[#555555] text-left self-start text-base font-normal">CPF</label>
                                <input
                                    value={userData.cpf || ""}
                                    onChange={(e) => setUserData({...userData, cpf: e.target.value})}
                                    placeholder="Seu CPF"
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
                                    value={userData.juridicoType || ""}
                                    onChange={(e) => setUserData({...userData, juridicoType: e.target.value})}
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
                                    value={userData.oab || ""}
                                    onChange={(e) => setUserData({...userData, oab: e.target.value})}
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
                                <p className="font-light ml-2">{userData.email || ""}</p>
                            </div>
                            <p className={`text-${userData.emailVerified ? "green" : "red"}-500 -mt-2 font-semibold ml-10`}>
                                {userData.emailVerified ? "Verificado" : "Não Verificado"}
                            </p>
                            <a onClick={sendVerificationEmail} className="bg-[#bdd4f6] py-[0.15rem] rounded-lg text-center inline-block w-40 text-sky-500 font-semibold " href="#">
                                Verificar
                            </a>
                        </div>
                        <div className="mt-8 flex flex-col justify-start">
                            <h1 className="font-semibold mb-1">Meu Plano</h1>
                            <div className="flex flex-row items-center">
                                <div className="w-8 h-8 rounded-full flex justify-center items-center">
                                    <FaScaleBalanced className="fill-sky-500 size-6"></FaScaleBalanced>
                                </div>
                                <p className="font-light text-lg ml-2">Tier Free</p>
                            </div>
                                <a className="bg-[#bdd4f6] rounded-lg py-[0.15rem] text-center inline-block w-40 text-sky-500 font-semibold " href="#">
                                Mudar o Plano
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Profile.layout = page => <Layout children={page} title={'Profile'} fixedStatus={true} />;

export default Profile;
