import {z} from 'zod'

const goal = ['Bajos niveles de grasa', 'Ganar masa muscular', 'Tonificar', 'Mantenerse saludable'] as const;
export type goal = (typeof goal)[number];

const bodyType = ['Ectomorfo', 'Mesomorfo', 'Endomorfo'] as const;
export type bodyType = (typeof bodyType)[number];

const sex = ['Masculino', 'Femenino'] as const;
export type sex = (typeof sex)[number];

export const mappedBodyType: {[key in bodyType]: string} = {
  Ectomorfo: 'Ectomorfo',
  Endomorfo: 'Endomorfo',
  Mesomorfo: 'Mesomorfo'
}
export const mappedGoal: {[key in goal]: string} = {
  "Bajos niveles de grasa": 'Bajos Niveles de grasa',
  "Ganar masa muscular": "Ganar masa muscular",
  "Tonificar": "Tonificar",
  "Mantenerse saludable": "Mantenerse saludable"
}

export const mappedSex: {[key in sex]: string} = {
  Masculino: 'Masculino',
  Femenino: 'Femenino'
}
export const userSchema = z.object({
  sex: z.enum(sex, {
    errorMap: () => ({message: 'Por favor selecciona tu sexo'})
  }),

  age: z.string().refine((age) => !isNaN(parseInt(age)), {
    message: 'La edad es requerida'
  }).transform((age) => Number(age)),

  height: z.string().refine((height) => !isNaN(parseFloat(height)), {
    message: 'La altura es requerida'
  }).transform((height) => Number(height)),

  weight: z.string().refine((weight) => isNaN(parseFloat(weight)),{
    message: 'El peso en Kilogramos es requerido'
  }).transform((weight) => Number(weight)),

  bodyType: z.enum(bodyType, {
    errorMap: () => ({message: 'Por favor selecciona un Tipo de Cuerpo'})
  }),
    exerciseFrequency: z.string().refine((exerciseFrequency) => !isNaN(parseInt(exerciseFrequency)), {
    message: 'La frecuencia de ejercicio es requerida'
  }).transform((exerciseFrequency) => Number(exerciseFrequency)),

  goal: z.enum(goal, {
    errorMap: () => ({message: 'Por favor selecciona un Objetivo'})
  }),

})

