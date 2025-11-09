export default function Login() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-white relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 bg-black/30 backdrop-blur-sm">
        <h1 className="text-2xl  bg-gradient-to-br font-bold tracking-wide text-yellow-400">
          Mercado Livre
        </h1>
        <ul className="flex gap-8 text-lg font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
          <li className="text-yellow-400 font-semibold cursor-pointer">Login</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Registrar</li>
        </ul>
      </nav>

      {/* Formulário de Login */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-10 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
          Bem-vindo de volta
        </h2>

        <form className="flex flex-col gap-5">
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
            Entrar
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-400">
          <p>
            Esqueceu sua senha?{" "}
            <a href="#" className="text-yellow-400 hover:underline">
              Recuperar acesso
            </a>
          </p>
          <p className="mt-2">
            Ainda não tem conta?{" "}
            <a href="/register" className="text-yellow-400 hover:underline">
              Criar conta
            </a>
          </p>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © 2025 Mercado Livre Clone — Desenvolvido por Emerson Sabino
      </footer>
    </div>
  );
}
