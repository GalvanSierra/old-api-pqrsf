const Joi = require('joi');

const { createPeticionarioSchema } = require('./peticionario.schema');
const { createPacienteSchema } = require('./paciente.schema');

const id = Joi.number().integer();
const radicado = Joi.number().integer();

const estadoId = Joi.number().integer();
const tipoPeticionId = Joi.number().integer();
const servicioId = Joi.number().integer();
const areaId = Joi.number().integer();
const motivo = Joi.string();
const dirigidaA = Joi.string().max(255);
const canalId = Joi.number().integer();
const tutela = Joi.boolean().truthy(1).falsy(0);
const radicadoTutela = Joi.any();

const seGestiono = Joi.boolean().truthy(1).falsy(0);
const fechaDiligencia = Joi.date();
const clasePeticionId = Joi.number().integer();
const complejidadId = Joi.number().integer();
const liderId = Joi.number().integer();
const respuesta = Joi.string();
const seDioRespuesta = Joi.boolean().truthy(1).falsy(0);
const descripcionGestion = Joi.string();
const fechaRespuesta = Joi.date();
const calidad = Joi.number().integer();

const getPeticionSchema = Joi.object({
  id: id.required(),
});

const createPeticionSchema = Joi.object({
  tipoPeticionId: tipoPeticionId.required(),
  servicioId: servicioId.required(),
  motivo: motivo.required(),
  areaId: areaId.required(),
  canalId: canalId.required(),
  dirigidaA: dirigidaA.required(),
  estadoId,
  tutela,
  radicadoTutela,
  peticionario: createPeticionarioSchema,
  paciente: createPacienteSchema,
  // gestión de la peticion
  seGestiono,
  fechaDiligencia,
  clasePeticionId,
  complejidadId,
  liderId,
  respuesta,
  seDioRespuesta,
  descripcionGestion,
  fechaRespuesta,
  calidad,
});

const createPQRSFSchema = Joi.object({
  tipoPeticionId: tipoPeticionId.required(),
  servicioId: servicioId.required(),
  motivo: motivo.required(),
  areaId: areaId.required(),
  tutela: tutela,
  radicadoTutela,
  dirigidaA: dirigidaA.required(),

  peticionario: createPeticionarioSchema,
  paciente: createPacienteSchema,
});

const updatePeticionSchema = Joi.object({
  // información de la gestión
  seGestiono,
  radicado,
  fechaDiligencia,
  clasePeticionId,
  complejidadId,
  liderId,
  respuesta,
  seDioRespuesta,
  descripcionGestion,
  fechaRespuesta,
  calidad,
});

module.exports = {
  getPeticionSchema,
  createPeticionSchema,
  updatePeticionSchema,
  createPQRSFSchema,
};