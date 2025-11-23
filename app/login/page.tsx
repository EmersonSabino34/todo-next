import React from 'react'; // Adicionado para boa prática

export default function Login() {
  return (
    // 1. Container Principal: min-h-screen, gradiente, centralização
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-white relative">
      
      {/* 2. Navbar Responsiva */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-10 py-5 bg-black/30 backdrop-blur-sm">
        {/* Logo/Título */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-yellow-400">
          Mercado Livre
        </h1>
        
        {/* Links de Navegação */}
        <ul className="flex gap-4 sm:gap-8 text-sm sm:text-lg font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition hidden sm:block">Home</li> {/* Oculta 'Home' em telas pequenas para economizar espaço */}
          <li className="text-yellow-400 font-semibold cursor-pointer">Login</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Registrar</li>
        </ul>
      </nav>

      {/* 3. Formulário de Login Aprimorado e Responsivo */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-6 sm:p-10 w-[95%] max-w-sm md:max-w-md mx-4 mb-20"> {/* Ajustado w-[95%] e max-w-sm/md para melhor responsividade */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
          {/* Corrigido 'mb-6r' para 'mb-8' e de 'br' para 'r' no gradiente de texto */}
          Bem-vindo de volta
        </h2>

        <form className="flex flex-col gap-5">
          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1 font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200" // Adicionado focus:ring e transition
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
              placeholder="Digite sua senha"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200" // Adicionado focus:ring e transition
            />
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            className="mt-3 bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.02]" // Ajustado para scale-[1.02] para um efeito menos intenso e transition
          >
            Entrar
          </button>
        </form>

        {/* Links de Recuperação/Criação de Conta */}
        <div className="text-center mt-6 text-sm text-gray-400">
          <p className="mb-2"> {/* Adicionado mb-2 para espaçar os parágrafos */}
            Esqueceu sua senha?{" "}
            <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline transition"> {/* Adicionado hover:text */}
              Recuperar acesso
            </a>
          </p>
          <p>
            Ainda não tem conta?{" "}
            <a href="/register" className="text-yellow-400 hover:text-yellow-300 hover:underline transition"> {/* Adicionado hover:text */}
              Criar conta
            </a>
          </p>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="absolute bottom-0 w-full text-center py-4 text-gray-500 text-xs sm:text-sm bg-black/30 backdrop-blur-sm"> {/* Adicionado fundo para visibilidade em telas pequenas */}
        © 2025 Mercado Livre Clone — Desenvolvido por Emerson Sabino
      </footer>
    </div>
  );
}
