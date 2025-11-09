import Link from "next/link";

export default function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-white">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 bg-black/30 backdrop-blur-sm">
        <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
          Mercado Livre
        </h1>
        <ul className="flex gap-8 text-lg font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            <Link href="/login">Login</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            <Link href="/register">Registrar</Link>
          </li>
        </ul>
      </nav>

      {/* Conteúdo central */}
      <div className="text-center mt-10 px-6">
        <h2 className="text-5xl  bg-gradient-to-br font-bold mb-4 from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
          Bem-vindo ao Mercado Livre Clone
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Explore as melhores ofertas em tecnologia, games e muito mais — tudo em
          um só lugar!
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition transform hover:scale-105">
          Explorar agora
        </button>
      </div>

      {/* Rodapé */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © 2025 Mercado Livre Clone — Desenvolvido por Emerson Sabino
      </footer>
    </div>
  );
}
