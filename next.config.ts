import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // aceita qualquer domínio HTTPS
      },
      {
        protocol: "http",
        hostname: "**", // aceita qualquer domínio HTTP (caso precise)
      },
    ],
    unoptimized: false, // deixa o otimizador padrão do Next ativo
  },
};

export default nextConfig;
