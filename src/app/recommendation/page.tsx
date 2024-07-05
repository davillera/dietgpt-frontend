"use client";
import Loading from "./loaging"; // Asegúrate de importar tu componente de carga

import Link from "next/link";
import { useFormContext } from "../context/FormContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FormData {
  // Define aquí la interfaz de tu FormData según la estructura que tengas
}

interface PlanNutricional {
  desayuno: string;
  media_mañana: string;
  almuerzo: string;
  merienda: string;
  cena: string;
}

interface ApiResponse {
  completion: {
    plan_nutricional: PlanNutricional;
    plan_entrenamiento: {
      [key: string]: string;
    };
  };
}

export default function Page() {
  const { FormData } = useFormContext();
  console.log(FormData);

  const API = "http://localhost:3300";
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  useEffect(() => {
    FormData ? getRecommendation() : router.push("/");
  }, [FormData, API, router]);

  async function getRecommendation() {
    console.log(API);

    setLoading(true); // Inicia el estado de carga
    await fetch(`${API}/openai/completion`, {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "desde el fetch");
        setResponse(data); // Guarda la respuesta
        setLoading(false); // Finaliza el estado de carga
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
        setLoading(false); // Finaliza el estado de carga en caso de error
      });
  }

  if (loading || !response) {
    return <Loading />;
  }

  const { plan_nutricional, plan_entrenamiento } = response.completion;

  return (
    <div className="bg-green min-h-screen flex flex-col justify-center items-center text-black">
      <h1 className="text-4xl text-center font-bold mb-8 mt-4 font-space-grotesk">
        Tu Plan Nutricional y de Ejercicio
      </h1>
      <div className="bg-gray-100 min-h-screen p-4 w-full">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Plan Nutricional
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Desayuno
            </h2>
            <p className="text-gray-600">{plan_nutricional.desayuno}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Media Mañana
            </h2>
            <p className="text-gray-600">{plan_nutricional.media_mañana}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Almuerzo
            </h2>
            <p className="text-gray-600">{plan_nutricional.almuerzo}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Merienda
            </h2>
            <p className="text-gray-600">{plan_nutricional.merienda}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Cena</h2>
            <p className="text-gray-600">{plan_nutricional.cena}</p>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Plan de Entrenamiento
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Día
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Entrenamiento
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(plan_entrenamiento).map(([day, workout]) => (
                  <tr key={day}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {day}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {workout}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <button className="my-4 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
          <Link href={"./form"}>¿Hacemos Otro?</Link>
        </button>
      </div>
    </div>
  );
}
