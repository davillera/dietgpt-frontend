"use client";
import { useFormContext } from "../context/FormContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  sex: string;
  age: number;
  height: number;
  weight: number;
  bodyType: string;
  exerciseFrequency: number;
  goal: string;
};

export default function Page() {

  const { setData } = useFormContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setData(data);
    router.push("/recommendation");
  };

  return (
    <>
      <div className="bg-green min-h-screen flex flex-col justify-center items-center text-black">
        <h1 className="text-4xl mb-8 mt-4 font-space-grotesk">
          DietGPT - Formulario
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-72 w-full font-poppins"
        >
          <div className="mb-6">
            <label className="block mb-2">Género</label>
            <select
              id="sex"
              className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
              {...register("sex", { required: true })}
            >
              <option value="">Seleccione...</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
            {errors.sex && (
              <span className="text-red font-medium">
                Este campo es requerido
              </span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2">Edad</label>
            <input
              type="number"
              id="edad"
              className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
              {...register("age", { required: true, min: 15, max: 80 })}
            />
            {errors.age && (
              <span>La edad debe ser mayor a 15 y menor a 80 años</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2">Peso (Kg)</label>
            <input
              id="Peso"
              type="number"
              className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
              {...register("weight", { required: true, min: 35, max: 149 })}
            />
            {errors.weight && (
              <span>El peso debe ser mayor a 35Kg y menor a 150Kg</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2">Altura (cm)</label>
            <input
              id="Altura"
              type="number"
              className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
              {...register("height", { required: true, min: 101, max: 229 })}
            />
            {errors.height && (
              <span>La altura debe ser mayor a 100cm y menor a 230cm</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2">Tipo de cuerpo</label>
            <select
              className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
              {...register("bodyType", { required: true })}
            >
              <option value="">Seleccione...</option>
              <option value="ectomorfo">Ectomorfo</option>
              <option value="endomorfo">Endomorfo</option>
              <option value="mesomorfo">Mesomorfo</option>
            </select>
            <p className="text-sm mt-2">
              <Link
                target="_blank"
                className="text-blue-300 underline"
                href="https://www.tuasaude.com/es/somatotipo/"
              >
                No estoy seguro qué tipo de cuerpo soy
              </Link>
            </p>
            {errors.bodyType && <span>Este campo es requerido</span>}
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Frecuencia de ejercicio semanal
            </label>
            <input
              id="Frecuencia de Ejercicio"
              type="number"
              className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
              {...register("exerciseFrequency", {
                required: true,
                min: 1,
                max: 7,
              })}
            />
            {errors.exerciseFrequency && (
              <span>La frecuencia debe ser entre 1 y 7 días por semana</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2">Objetivo</label>
            <select
              id="Objetivo"
              className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
              {...register("goal", { required: true })}
            >
              <option value="">Seleccione...</option>
              <option value="bajos niveles grasa">
                Bajos Niveles de grasa
              </option>
              <option value="ganar masa muscular">Ganar masa muscular</option>
              <option value="tonificar">Tonificar</option>
              <option value="mantenerse saludable">Mantenerse saludable</option>
            </select>
            {errors.goal && <span>Este campo es requerido</span>}
          </div>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Quiero Mejorar mi estado físico
          </button>
        </form>
      </div>
    </>
  );
}
