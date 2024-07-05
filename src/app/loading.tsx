export default function loading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray text-white">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-green h-32 w-32 mb-4"></div>
        <h2 className="text-center text-xl font-montserrat font-semibold">
          Cargando...
        </h2>
        <p className="w-1/3 text-center text-md font-poppins">
          Por favor, espera un momento mientras cargamos el contenido.
        </p>
      </div>
    </>
  );
}
