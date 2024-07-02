import React from "react";

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray text-white">
      <h1 className="text-6xl font-bold font-montserrat text-green">404</h1>
      <p className="text-2xl font-poppins mt-4">Página no encontrada</p>
      <p className="text-xl font-space-grotesk mt-2">
        Lo sentimos, pero la página que estás buscando no existe.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-green text-black font-poppins rounded hover:bg-green/80"
      >
        Volver al inicio
      </a>
    </div>
  );
}
