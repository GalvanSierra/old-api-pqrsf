const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class PeticionService {
  async find() {
    const peticiones = await models.Peticion.findAll({
      attributes: ['id', 'fechaRecepcion'],
      include: ['estado', 'tipoPeticion'],
    });

    if (!peticiones) throw boom.notFound('Peticion no encontrada');

    return peticiones;
  }

  async findOne(id) {
    const peticion = await models.Peticion.findByPk(id, {
      attributes: ['id', 'fechaRecepcion', 'estadoId', 'tipoPeticionId'],
      include: ['estado', 'tipoPeticion'],
    });

    if (!peticion) throw boom.notFound('Peticion no encontrada');

    return peticion;
  }

  async create(data) {
    const peticionCreada = await models.Peticion.create(data, {
      include: ['peticionario', 'paciente'],
    });

    return peticionCreada;
  }
}

module.exports = PeticionService;
