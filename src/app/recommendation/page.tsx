"use client";
import { useFormContext } from "../context/FormContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loaging"; // Asegúrate de importar tu componente de carga

export default function Page() {
  const { FormData } = useFormContext();
  console.log(FormData);

  const API = "http://localhost:3300";
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // const [response, setResponse] = useState(null);
  let dataResponse: any;

  useEffect(() => {
    FormData ? getRecommendation() : router.push("/");
  }, [FormData, API, router]);

  // const data = {
  //   plan_nutricional: {
  //     desayuno: "Batido de proteínas con plátano y avena",
  //     media_mañana: "Yogur griego con frutos secos",
  //     almuerzo: "Pechuga de pollo a la plancha con quinoa y verduras al vapor",
  //     merienda: "Tortilla de claras con espinacas",
  //     cena: "Salmón al horno con batata asada",
  //   },
  //   plan_entrenamiento: {
  //     día_1:
  //       "Entrenamiento de fuerza: Sentadillas, press de banca, peso muerto, dominadas",
  //     día_2:
  //       "Entrenamiento de hipertrofia: Extensiones de cuádriceps, curl de bíceps, elevaciones laterales, abdominales",
  //     día_3: "Descanso activo: Caminata ligera o yoga",
  //     día_4:
  //       "Entrenamiento de fuerza: Prensa de piernas, press militar, remo con barra, fondos en paralelas",
  //   },
  // };

  function getRecommendation() {
    console.log(API);

    setLoading(true); // Inicia el estado de carga
    fetch(`${API}/openai/completion`, {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dataResponse = data;
        console.log(data, "desde el fetch");
        // setResponse(data); // Guarda la respuesta
        setLoading(false); // Finaliza el estado de carga
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
        setLoading(false); // Finaliza el estado de carga en caso de error
      });
  }



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-green min-h-screen flex flex-col justify-center items-center text-black">
          <h1 className="text-4xl font-bold mb-8 mt-4 font-space-grotesk">
            Tu Plan Nutricional y de Ejercicio
          </h1>
          <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Plan Nutricional
              </h1>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Desayuno
                </h2>
                <p className="text-gray-600">
                  {/* {dataResponse.completion.plan_nutricional.desayuno} */}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Media Mañana
                </h2>
                <p className="text-gray-600">
                  {/* {dataResponse.plan_nutricional.media_mañana} */}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Almuerzo
                </h2>
                <p className="text-gray-600">
                  {/* {dataResponse.plan_nutricional.almuerzo} */}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Merienda
                </h2>
                <p className="text-gray-600">
                  {/* {dataResponse.plan_nutricional.merienda} */}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Cena
                </h2>
                <p className="text-gray-600">
                  {/* {dataResponse.plan_nutricional.cena} */}
                </p>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Plan de Entrenamiento
              </h1>

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
                <tbody className="bg-white divide-y divide-gray-200"></tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
