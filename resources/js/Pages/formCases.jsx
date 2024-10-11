import Layout from "@/layouts/layout";
import { router } from "@inertiajs/react";
import React, { useState } from "react";
import Select from 'react-select';

function CasosForm() {
  
  const options = [
    { value: "", label: "-- Selecione uma opção --" },
    { value: "acaoIndenizacao", label: "Ação de Indenização" },
    { value: "acaoAlimentos", label: "Ação de Alimentos" },
    { value: "acaoDespejo", label: "Ação de Despejo" },
    { value: "acaoUsucapiao", label: "Ação de Usucapião" },
    { value: "acaoDivorcio", label: "Ação de Divórcio" },
    { value: "acaoTrabalhista", label: "Ação Trabalhista" }
  ];
    
  const [formData, setFormData] = useState({
    case_desc_short: "",
    case_desc_long: "",
    case_jud: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica do form aqui
    console.log(formData);
    router.post('/sendcases', formData, {
      headers: {
        'content-type': 'application/json',
      },
      onSuccess: () => {
        alert('Caso enviado com sucesso!');
      },
      onError: (error) => {
        console.log(error);
      }
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-[85vh] bg-gray-100">
        <div
          id="form"
          className="flex flex-col h-auto w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] rounded shadow-2xl bg-slate-100"
        >
          <header className="w-full border-b-2 h-10 flex flex-row space-x-6 items-center">
            <a href="/">
              <svg
                className="w-6 h-6 mt-2 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </a>
            <h1 className="mt-1 text-xl sm:text-2xl font-semibold">Envie seu Caso</h1>
          </header>

          <form className="p-4 sm:p-6 flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="shortDesc" className="block text-gray-700">Descrição Curta &nbsp;<span className="text-red-500">*Obrigatorio</span></label>
              <textarea
                required
                maxLength={150}
                name="case_desc_short" // Alterado
                value={formData.case_desc_short}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Digite uma descrição breve do seu caso (até 150 caracteres)"
              />
            </div>

            <div>
              <label htmlFor="longDesc" className="block text-gray-700">Descrição Longa</label>
              <textarea
                maxLength={500}
                name="case_desc_long" // Alterado
                value={formData.case_desc_long}
                onChange={handleChange}
                className="w-full h-40 mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Digite uma descrição longa detalhando o máximo de informações do seu caso (até 500 caracteres)"
              />
            </div>

            <div>
              <label htmlFor="causaJudicial" className="block text-gray-700">Causa Judicial&nbsp;<span className="text-red-500">*Obrigatorio</span></label>
              <select
                required
                name="case_jud" // Alterado
                value={formData.case_jud}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600">
                <option value="">-- Selecione uma opção --</option>
                <option value="1">Ação de Indenização</option>
                <option value="2">Ação de Alimentos</option>
                <option value="3">Ação de Despejo</option>
                <option value="4">Ação de Usucapião</option>
                <option value="5">Ação de Divórcio</option>
                <option value="6">Ação Trabalhista</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-4 p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

CasosForm.layout = page => <Layout children={page} title={'Cases'} fixedStatus={false} />;

export default CasosForm;
