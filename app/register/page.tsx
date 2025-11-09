export default function Register() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-white relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 bg-black/30 backdrop-blur-sm">
        <h1 className="text-2xl font-bold  bg-gradient-to-br tracking-wide text-yellow-400">
          Mercado Livre
        </h1>
        <ul className="flex gap-8 text-lg font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Login</li>
          <li className="text-yellow-400 font-semibold cursor-pointer">Registrar</li>
        </ul>
      </nav>

      {/* Formulário de Registro */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-10 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
          Criar Conta
        </h2>

        <form className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
              Nome completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:outline-none text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:outline-none text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-400 mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:outline-none text-white"
            />
          </div>

          <button
            type="submit"
            className="mt-3 bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Registrar
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Já tem uma conta?{" "}
          <a href="/login" className="text-yellow-400 hover:underline">
            Faça login
          </a>
        </p>
      </div>

      {/* Rodapé */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © 2025 Mercado Livre Clone — Desenvolvido por Emerson Sabino
      </footer>
    </div>
  );
}
