import React, { useState } from 'react';
// Ícones Feather Icons (simulados por classes, idealmente viriam de uma biblioteca como react-icons)
const EyeIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const EyeOffIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.828l-4.25-4.25m2.5-2.5l4.25 4.25m-4.25-4.25a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.375 14.828A9.752 9.752 0 0012 5c-4.477 0-8.268 2.943-9.542 7a9.752 9.752 0 005.125 7.828" /></svg>;

// --- Componente principal ---

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  
  // Lógica Simplificada para Força da Senha (Apenas para demonstração visual do Tailwind)
  // Em uma aplicação real, isto seria baseado na string da senha
  const [passwordStrength, setPasswordStrength] = useState(75); // Simula 75% de força

  const getStrengthBarColor = (strength) => {
    if (strength < 30) return 'bg-red-500';
    if (strength < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-white relative overflow-hidden">
      
      {/* Navbar Responsiva */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-10 py-5 bg-black/30 backdrop-blur-sm z-10">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-yellow-400">
          Mercado Livre
        </h1>
        <ul className="flex gap-4 sm:gap-8 text-sm sm:text-lg font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition hidden sm:block">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Login</li>
          <li className="text-yellow-400 font-semibold cursor-pointer">Registrar</li>
        </ul>
      </nav>

      {/* Formulário de Registro - Com Animação e Gradiente de Borda */}
      <div 
        className="
          bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 w-[95%] max-w-sm md:max-w-md mx-4 my-8 sm:my-10 z-0
          // Efeitos impressionantes:
          relative overflow-hidden group
          transform translate-y-0 opacity-100 transition-all duration-700 ease-out animate-fadeInUp
        "
        style={{ animationDelay: '200ms' }} // Simula delay de animação
      >
        {/* Efeito de Borda de Gradiente Pulsante (Simulado) */}
        <div className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none z-[-1]">
          <div className="absolute inset-0 rounded-2xl [background:linear-gradient(to_right,rgba(252,211,77,0.7),rgba(255,255,255,0.1))] opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-pulse-slow"></div>
          <div className="absolute inset-0 rounded-2xl border border-gray-700"></div> {/* Borda original mantida */}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
          Criar Conta 🚀
        </h2>

        <form className="flex flex-col gap-4 sm:gap-5">
          {/* Campos Nome e E-mail mantidos com estilo aprimorado */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-1 font-semibold">
              Nome completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1 font-semibold">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200"
            />
          </div>

          {/* Campo Senha com Toggle e Medidor de Força */}
          <div className='relative'>
            <label htmlFor="password" className="block text-sm text-gray-300 mb-1 font-semibold">
              Senha
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Crie uma senha segura"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200 pr-12"
              // No React real, o onChange atualizaria o estado da senha e a força
            />
            {/* Botão de Toggle da Senha */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-gray-400 hover:text-yellow-400 transition"
              aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
            >
              {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>

            {/* Medidor de Força da Senha */}
            <div className="mt-2 h-2 rounded-full bg-gray-700 overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ease-out ${getStrengthBarColor(passwordStrength)}`}
                style={{ width: `${passwordStrength}%` }}
              ></div>
            </div>
            <p className="text-xs mt-1 text-gray-400">
              Força da senha: <span className={passwordStrength < 70 ? 'text-yellow-400' : 'text-green-400'}>{passwordStrength < 70 ? 'Média' : 'Forte'}</span>
            </p>
          </div>

          {/* Campo Confirmar Senha */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm text-gray-300 mb-1 font-semibold">
              Confirmar Senha
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirme sua senha"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-white transition duration-200"
            />
          </div>

          {/* Botão Registrar com Efeito 3D sutil */}
          <button
            type="submit"
            className="mt-4 bg-yellow-400 text-black font-extrabold py-3 rounded-xl shadow-lg shadow-yellow-500/30 hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] active:shadow-sm"
          >
            Criar minha conta
          </button>
        </form>

        {/* Link para Login */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Já tem uma conta?{" "}
          <a href="/login" className="text-yellow-400 font-medium hover:text-yellow-300 hover:underline transition">
            Faça login
          </a>
        </p>
      </div>
      
      {/* Rodapé */}
      <footer className="absolute bottom-0 w-full text-center py-4 text-gray-500 text-xs sm:text-sm bg-black/30 backdrop-blur-sm z-10">
        © 2025 Mercado Livre Clone — Desenvolvido por Emerson Sabino
      </footer>
    </div>
  );
}
