import { useState } from "react";
import axios from "axios";
import Layout from "@/layouts/layout";
import InputMask from 'react-input-mask';
import { router } from "@inertiajs/react";


function SignupLawyer() {
  const [formData, setFormData] = useState({
    usu_nome: "",
    usu_email: "",
    usu_password: "",
    usu_oab: "",
    usu_cpf: "",
    usu_phone: "",
    usu_admin: false,
    usu_lawyer: true,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
        e.preventDefault(); 
        router.post('/store', formData, {
          headers: {
            'Content-Type': 'application/json', // Definindo o Content-Type
          },
            onError: (error) => {
                console.error('Erro ao realizar o cadastro',error);
            }
        });
       // console.log("Dados do Formulário:", formData); 
      

    }
  return (
    <>
         <div className="text-center h-[85vh] text-[30px]">
      <h1 className="text">Precisamos dessas Informaçoes pra concluir seu cadastro</h1>
      <form onSubmit={handleSubmit}>
        <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-3 text-gray-600">Nome Completo</h2>
        <input
          required
          name="usu_nome"
          value={formData.usu_nome}
          onChange={handleChange}
          className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]"
          type="text"
          placeholder="Seu Nome"
        />

        <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-3 text-gray-600">Email</h2>
        <input
          required
          name="usu_email"
          value={formData.usu_email}
          onChange={handleChange}
          className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]"
          type="email"
          placeholder="Seu Email"
        />

        <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-3 text-gray-600">Senha</h2>
        <input
          required
          name="usu_password"
          value={formData.usu_password}
          onChange={handleChange}
          className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]"
          type="password"
          placeholder="Sua Senha"
        />

        <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-3 text-gray-600">Numero da OAB</h2>
        <InputMask
          required
          mask="aa999999"
          name="usu_oab"
          value={formData.usu_oab}
          onChange={handleChange}
          className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]"
          placeholder="UF999999"
        />

        <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-3 text-gray-600">CPF</h2>
        <InputMask
          required
          mask="999.999.999-99"
          name="usu_cpf"
          value={formData.usu_cpf}
          onChange={handleChange}
          className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]"
          placeholder="000.000.000-00"
        />

        <h2 className="text font-['Poppins',_sans-serif] text-[15px] mt-3 text-gray-600">Telefone</h2>
        <InputMask
          required
          mask="(99) 99999-9999"
          name="usu_phone"
          value={formData.usu_phone}
          onChange={handleChange}
          className="input rounded-lg border-none bg-[#e6ebf3] w-[410px] text font-['Poppins',_sans-serif] text-[15px]"
          placeholder="(xx) xxxxx-xxxx"
        />
<h2></h2>
        <button
          type="submit"
          className="text font-['Poppins',_sans-serif] w-[265px] bg-[#1557BB] text-white rounded-[9px] mt-3 text-[15px] h-[40px]"
        >
          Continuar
        </button>
      </form>

     
    </div>
    </>
  );
}

SignupLawyer.layout = (page) => (
  <Layout children={page} title={"SignIn"} fixedStatus={true} />
);

export default SignupLawyer;
