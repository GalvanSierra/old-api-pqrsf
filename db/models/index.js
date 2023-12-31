const { Usuario, UsuarioSchema } = require('./usuario.model');
const {
  ReferenciaGeneralSchema,
  Eps,
  Regimen,
  TipoPeticion,
  Area,
  Servicio,
  Canal,
  ClasePeticion,
  Estado,
  Calidad,
} = require('./referencias/general.model');
const {
  Complejidad,
  ComplejidadSchema,
} = require('./referencias/complejidad.model');
const {
  Departamento,
  DepartamentoSchema,
} = require('./referencias/departamento.model');
const {
  Municipio,
  MunicipiosSchema,
} = require('./referencias/municipio.model');
const {
  TipoIdentificacion,
  TipoIdentificacionSchema,
} = require('./referencias/tipoIdentificacion.model');
const { Derecho, DerechoSchema } = require('./referencias/derecho.model');
const { Peticionario, PeticionarioSchema } = require('./peticionario.model');
const { Paciente, PacienteSchema } = require('./paciente.model');
const { Peticion, PeticionSchema } = require('./peticion.model');
const {
  PeticionDerecho,
  PeticionDerechoSchema,
} = require('./peticiones-derechos.model');

function setUpModels(sequelize) {
  // Referencias
  TipoIdentificacion.init(
    TipoIdentificacionSchema,
    TipoIdentificacion.config(sequelize),
  );
  Eps.init(ReferenciaGeneralSchema, Eps.config(sequelize));
  Regimen.init(ReferenciaGeneralSchema, Regimen.config(sequelize));
  Departamento.init(DepartamentoSchema, Departamento.config(sequelize));
  Municipio.init(MunicipiosSchema, Municipio.config(sequelize));
  TipoPeticion.init(ReferenciaGeneralSchema, TipoPeticion.config(sequelize));
  Area.init(ReferenciaGeneralSchema, Area.config(sequelize));
  Servicio.init(ReferenciaGeneralSchema, Servicio.config(sequelize));
  Canal.init(ReferenciaGeneralSchema, Canal.config(sequelize));
  ClasePeticion.init(ReferenciaGeneralSchema, ClasePeticion.config(sequelize));
  Estado.init(ReferenciaGeneralSchema, Estado.config(sequelize));
  Complejidad.init(ComplejidadSchema, Complejidad.config(sequelize));
  Calidad.init(ReferenciaGeneralSchema, Calidad.config(sequelize));
  Derecho.init(DerechoSchema, Derecho.config(sequelize));

  Peticion.init(PeticionSchema, Peticion.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Peticionario.init(PeticionarioSchema, Peticionario.config(sequelize));
  Paciente.init(PacienteSchema, Paciente.config(sequelize));
  PeticionDerecho.init(
    PeticionDerechoSchema,
    PeticionDerecho.config(sequelize),
  );

  Peticion.associates(sequelize.models);
  Usuario.associates(sequelize.models);
  Peticionario.associates(sequelize.models);
  Paciente.associates(sequelize.models);
}

module.exports = setUpModels;
