import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-gray min-h-screen flex flex-col justify-center items-center text-white">

      <h1 className="text-7xl">DietGPT</h1>
      <p className="text-center text-3xl font-montserrat">
        ¿Te gustaría usar una <span className="text-green font-bold">App</span> para mejorar <span
        className="text-green font-bold">TU</span> estado físico?
      </p>

      <button
        className="mt-8 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
        <Link href={'./form'}>Comencemos</Link>
      </button>
    </main>

  );
}
