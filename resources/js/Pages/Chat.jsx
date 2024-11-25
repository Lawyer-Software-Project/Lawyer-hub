import Layout from "@/layouts/layout.jsx"
import Header from "@/componentes/header/Header";
import React, { useState } from 'react';

const ChatApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (e) => {
    if (!e.target.closest('#menuButton') && !e.target.closest('#menuDropdown')) {
      setMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (<>
    <Header/>
    <div className="flex h-screen overflow-hidden">
      {/* Main Chat Area */}
      <div className="flex-1">
        {/* Chat Header */}
        <header className="bg-white pl-36 p-4 mt-16 text-gray-700">
          <h1 className="text-2xl font-semibold">Alice</h1>
        </header >

        {/* Chat Messages */}
        <div className="h-screen overflow-y-auto pr-36 pl-36 p-4 pb-36">
          {/* Messages */}
          <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
              <p className="text-gray-700">Hey Bob, how's it going?</p>
            </div>
          </div>

          <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
              <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
              <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
            </div>
          </div>
          {/* Add more messages as needed */}
        </div>

        {/* Chat Input */}
        <footer className=" bg-white border-t border-gray-300 p-4 absolute bottom-0 w-full">
          <div className="flex items-center">
            <input type="text" placeholder="Digite sua Mensagem..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Enviar</button>
          </div>
        </footer>
      </div>
    </div>
 </> );
};



export default ChatApp