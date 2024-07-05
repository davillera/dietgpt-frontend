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
  const [response, setResponse] = useState(null);

  function getRecommendation() {
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
        console.log(data);
        setResponse(data); // Guarda la respuesta
        setLoading(false); // Finaliza el estado de carga
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
        setLoading(false); // Finaliza el estado de carga en caso de error
      });
  }

  useEffect(() => {
    FormData ? getRecommendation() : router.push("/");
  }, [FormData, API, router]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-green min-h-screen flex flex-col justify-center items-center text-black">
          <h1 className="text-4xl font-bold mb-8 mt-4 font-space-grotesk">
            Tu Plan Nutricional y de Ejercicio
          </h1>
          <div>
            <code>
              {FormData && (
                <p>{JSON.stringify(FormData, null, 2)}</p> // Muestra FormData como una cadena JSON
              )}
            </code>
            {response && (
              <div>
                <h2>Recomendación:</h2>
                <p>{JSON.stringify(response, null, 2)}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
