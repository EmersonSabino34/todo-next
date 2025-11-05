import Image from "next/image";

export default function App(){

  const img1 = "/produtos/carro1.jpg";

  return(
    <div className="h-screen bg-black">
      <header >
        
      </header>

      <div className="h-10 w-10 bg-red-500 flex items-center justify-center">1</div>
      <div className="h-10 w-10 bg-gray-600 flex items-center justify-center">2</div>
      <div className="h-10 w-10 bg-green-600 flex items-center justify-center">3</div>
      <div className="h-10 w-10 bg-amber-600 flex items-center justify-center">4</div>
      <div className="h-10 w-10 bg-purple-600 flex items-center justify-center">5</div>
      <div></div>

      <img 
        src="produtos/carro1.jpg" 
        alt="não carregou"
      />

       <Image
        src="/produtos/carro1.jpg" // caminho relativo à pasta public
        alt="Logo da Academia"
        width={200}
        height={200}
        priority
      />

    </div>
  )
}