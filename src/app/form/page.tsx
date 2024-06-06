'use client'
import Link from "next/link"
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {mappedBodyType, mappedGoal, mappedSex, userSchema} from "app/validations/userSchema";

type Inputs = {
	sex: string,
	age: number,
	height: number,
	weight: number,
	bodyType: string,
	exerciseFrequency: number,
	goal: string,
}

export default function Page() {

	const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
		resolver: zodResolver(userSchema)
	})

	console.log(errors)

	const bodyTypeOptions = Object.entries(mappedBodyType).map(([key, value]) => (
		<option value={key} key={key}>
			{value}
		</option>
	));

	const goalOptions = Object.entries(mappedGoal).map(([key, value]) => (
		<option value={key} key={key}>
			{value}
		</option>
	))

	const sexOptions = Object.entries(mappedSex).map(([key, value]) => (
		<option value={key} key={key}>
			{value}
		</option>
	))

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};


	return (
		<>
			<div className="bg-green min-h-screen flex flex-col justify-center items-center text-black">
				<h1 className="text-4xl mb-8 mt-4 font-space-grotesk">DietGPT - Formulario</h1>

				<form onSubmit={handleSubmit(onSubmit)} className="max-w-72 w-full font-poppins">


					{/* Pregunta: Sexo */}
					<div className="mb-6">
						<label className="block mb-2">Sexo</label>
						<select id="sex" className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
										{...register('sex')}>
							{sexOptions}
						</select>
						{
							errors.sex?.message && <p>{errors.sex?.message}</p>
						}

					</div>

					{/* Pregunta: Edad */}
					<div className="mb-6">
						<label className="block mb-2">Edad</label>
						<input type="number" id="edad"
									 className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
									 {...register('age')}/>
						{
							errors.age?.message && <p>{errors.age?.message}</p>
						}
					</div>

					<div className="mb-6">
						<label className="block mb-2">Peso (Kg)</label>
						<input type="number" id="peso"
									 className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
									 {...register('weight')}/>
						{
							errors.age?.message && <p>{errors.age?.message}</p>
						}
					</div>

					{/* Pregunta: Altura en cm */}
					<div className="mb-6">
						<label className="block mb-2">Altura (cm)</label>
						<input type="number" id="height"
									 className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
									 {...register('height')}/>
						{
							errors.height?.message && <p>{errors.height?.message}</p>
						}
					</div>

					{/* Pregunta: Tipo de cuerpo (somatotipos) */}
					<div className="mb-6">
						<label className="block mb-2">Tipo de cuerpo</label>
						<select id="bodyType"
										className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
										{...register('bodyType')}>
							{bodyTypeOptions}
						</select>
						<p className="text-sm mt-2">
							<Link target="_blank" className="text-blue-300 underline"
										href="https://www.tuasaude.com/es/somatotipo/">
								No estoy seguro qué tipo de cuerpo soy
							</Link>
						</p>
						{
							errors.bodyType?.message && <p>{errors.bodyType?.message}</p>
						}

					</div>

					{/* Pregunta: Frecuencia de ejercicio semanal */}
					<div className="mb-6">
						<label className="block mb-2">Frecuencia de ejercicio semanal</label>
						<input type="number" id="exerciseFrequency"
									 className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
									 {...register('exerciseFrequency')}/>
						{
							errors.exerciseFrequency?.message && <p>{errors.exerciseFrequency?.message}</p>
						}
					</div>

					{/* Pregunta: Objetivo */}
					<div className="mb-6">
						<label className="block mb-2">Objetivo</label>
						<select id="goal"
										className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded w-full"
										{...register('goal')}>
							{goalOptions}
						</select>
						{
							errors.goal?.message && <p>{errors.goal?.message}</p>
						}
					</div>

					{/* Botón de enviar */}
					<button type={"submit"}
									className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
						Quiero Mejorar mi estado físico
					</button>
				</form>
				<pre>
          {JSON.stringify(watch(), null, 2)}
        </pre>
			</div>

		</>
	);
}