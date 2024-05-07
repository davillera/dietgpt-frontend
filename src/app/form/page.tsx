// 'use client'
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-green min-h-screen flex flex-col justify-center items-center text-black">
        <h1 className="text-4xl mb-8 font-space-grotesk">DietGPT - Formulario</h1>

        <form className="max-w-md w-full font-poppins">
          {/* Pregunta: Sexo */}
          <div className="mb-6">
            <label className="block mb-2">Sexo:</label>
            <select id="sexo" name="sexo" className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full">
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          {/* Pregunta: Edad */}
          <div className="mb-6">
            <label className="block mb-2">Edad:</label>
            <input type="number" id="edad" name="edad"
                   className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"/>
          </div>

          {/* Pregunta: Altura en cm */}
          <div className="mb-6">
            <label className="block mb-2">Altura (cm):</label>
            <input type="number" id="altura" name="altura"
                   className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"/>
          </div>

          {/* Pregunta: Tipo de cuerpo (somatotipos) */}
          <div className="mb-6">
            <label className="block mb-2">Tipo de cuerpo:</label>
            <select id="tipoCuerpo" name="tipoCuerpo"
                    className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full">
              <option value="ectomorfo">Ectomorfo</option>
              <option value="mesomorfo">Mesomorfo</option>
              <option value="endomorfo">Endomorfo</option>
            </select>
            <p className="text-sm mt-2">
              <Link target="_blank" className="text-blue-300 underline"
                    href="https://www.tuasaude.com/es/somatotipo/">
                No estoy seguro qué tipo de cuerpo soy
              </Link>
            </p>

          </div>

          {/* Pregunta: Frecuencia de ejercicio semanal */}
          <div className="mb-6">
            <label className="block mb-2">Frecuencia de ejercicio semanal:</label>
            <input type="number" id="frecuenciaEjercicio" name="frecuenciaEjercicio"
                   className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"/>
          </div>

          {/* Pregunta: Objetivo */}
          <div className="mb-6">
            <label className="block mb-2">¿Cuál es su objetivo?</label>
            <select id="objetivo" name="objetivo"
                    className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full">
              <option value="bajosNivelesGrasa">Bajos niveles de grasa</option>
              <option value="ganarMasaMuscular">Ganar masa muscular</option>
              <option value="tonificar">Tonificar</option>
              <option value="mantenerSaludable">Mantenerse saludable</option>
            </select>
          </div>

          {/* Botón de enviar */}
          <button type="submit"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
            Quiero Mejorar mi estado físico
          </button>
        </form>
      </div>
    </>
  );
}