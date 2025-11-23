import React from 'react';

export default function Register() {
  return (
    // Container Principal: min-h-screen, gradiente, centralização
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-white relative">
      
      {/* Navbar Responsiva */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-10 py-5 bg-black/30 backdrop-blur-sm">
        {/* Logo/Título */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-yellow-400">
          Mercado Livre
        </h1>
        
        {/* Links de Navegação */}
        <ul className="flex gap-4 sm:gap-8 text-sm sm:text-lg font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition hidden sm:block">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Login</li>
          <li className="text-yellow-400 font-semibold cursor-pointer">Registrar</li>
        </ul>
      </nav>

      {/* Formulário de Registro Aprimorado e Responsivo */}
      {/* Ajustado w-[95%] e max-w-sm/md e espaçamento para melhor responsividade em formulários longos */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-6 sm:p-8 w-[95%] max-w-sm md:max-w-md mx-4 my-8 sm:my-10">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
          Criar Conta
        </h2>

        {/* Formulário com mais campos: é importante que o espaçamento seja consistente */}
        <form className="flex flex-col gap-4 sm:gap-5">
          {/* Campo Nome completo */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1 font-medium">
              Nome completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200"
            />
          </div>

          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1 font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200"
            />
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-400 mb-1 font-medium">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Crie uma senha segura"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200"
            />
          </div>

          {/* Campo Confirmar Senha (Adicionado para melhor usabilidade) */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm text-gray-400 mb-1 font-medium">
              Confirmar Senha
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirme sua senha"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200"
            />
          </div>

          {/* Botão Registrar */}
          <button
            type="submit"
            className="mt-4 bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.02]"
          >
            Criar minha conta
          </button>
        </form>

        {/* Link para Login */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Já tem uma conta?{" "}
          <a href="/login" className="text-yellow-400 hover:text-yellow-300 hover:underline transition">
            Faça login
          </a>
        </p>
      </div>
      
      {/* Rodapé */}
      <footer className="absolute bottom-0 w-full text-center py-4 text-gray-500 text-xs sm:text-sm bg-black/30 backdrop-blur-sm">
        © 2025 Mercado Livre Clone — Desenvolvido por Emerson Sabino
      </footer>
    </div>
  );
}
