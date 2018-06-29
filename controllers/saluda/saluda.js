import { promise } from "../../utils";

const Saluda = (req, res) => { return res.status(200).json({ message: 'Example Node API', status: 'OK' }); }

const HelloWorld = async () => {
  try {
    return promise;
  } catch (e) {
    return { message: 'Ha ocurrido un error' }
  }
}

export { Saluda, HelloWorld };

/* EXAMPLE CONTROLLER WITH SEQUELIZE ORM */
/* 

import { models } from '../models/';

exports.createReseller = async (reseller) => {
  try {
    return await models.Owner.create(reseller);
  } catch (err) {
    return err;
  }
}

exports.getAllActivesResellers = async (adminId) => {
  try {
    return await models.Owner.findAll({ where: { userRole: 'RESELLER', adminId, active: true } });
  } catch (err) {
    return err;
  }
}

exports.getAllActivesResellersWithLogs = async (adminId) => {
  try {
    return await models.Owner.findAll({ where: { userRole: 'RESELLER', adminId, active: true }, attributes: ['ownerId', 'userRole', 'ownerName', 'ownerLastName', 'apiKey', 'email'],
    include: [
      { model: models.Company, on: { 'api_key': { col: 'owner.api_key' } }, attributes: ['frmNumberId', 'frmTipoId', 'apiKey', 'frmEmail', 'frmNombre', 'accessToken'], where: [{ active: true }],
      include: [
        { model: models.Log, attributes: ['logID', 'frmNumberId', 'typeLog', 'created_at'] },
      ] }
    ] });
  } catch (err) {
    return err;
  }
}

exports.getAllResellers = async (adminId) => {
  try {
    return await models.Owner.findAll({ where: { userRole: 'RESELLER', adminId } });
  } catch (err) {
    return err;
  }
}

exports.getResseller = async (ownerId) => {
  try {
    return await models.Owner.findById(ownerId);
  } catch (err) {
    return err;
  }
}

exports.updateReseller = async (reseller, ownerId) => {
  try {
    return await models.Owner.update(reseller, { where: { ownerId } });
  } catch (err) {
    return err;
  }
}

exports.deleteReseller = async (ownerId) => {
  try {
    return await models.Owner.destroy({ where: { ownerId } })
  } catch (err) {
    return err;
  }
}



*/