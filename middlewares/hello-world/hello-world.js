import { HelloWorld } from "../../controllers";

const helloWorld = (req, res) => {
  HelloWorld()
    .then((success) => res.status(200).json({ message: success }))
    .catch((err) => res.status(400).json({ message: err.message }))
}

export { helloWorld };

/* EXAMPLE MIDDLEWARE */

/* 

import { createReseller, deleteReseller, getAllResellers, getResseller, updateReseller } from "../controllers";

exports.createReseller = (req, res) => {
  const { ownerId, password, ownerName, ownerLastName, phone, email } = req.body;
  const reseller = { ownerId, password, ownerName, ownerLastName, phone, email, active: true, adminId: res.locals.owner, userRole: 'RESELLER' };
  
  createReseller(reseller)
    .then((success) => {
      return res.status(200).json({ message: 'Se ha creado con exito', success });
    })
    .catch((err) => {
      return res.status(err.status).json({ error: err.message });
    })
}

exports.getAllResellers = (req, res) => {
  getAllResellers(res.locals.owner)
    .then((success) => {
      return res.status(200).json(success);
    })
    .catch((err) => res.status(err.status).json({ message: err.message }));
}

exports.getResseller = (req, res) => {
  const { reseller } = req.params;

  getResseller(reseller)
    .then((success) => {
      const { ownerId, userRole, ownerName, ownerLastName, phone, email, active, adminId, apiKey, created_at } = success;
      return res.status(200).json({ ownerId, userRole, ownerName, ownerLastName, phone, email, active, adminId, apiKey, created_at });
    })
    .catch((err) => {
      return res.status(err.status | 400).json({ message: 'No se encontró reseller' });
    })
}

exports.updateReseller = (req, res) => {
  const { reseller } = req.params;
  const body = req.resellerData;

  body.ownerName = req.body.ownerName;
  body.ownerLastName = req.body.ownerLastName;
  body.phone = req.body.phone;
  body.email = req.body.email;

  updateReseller(req.body, reseller)
    .then((success) => {
      return res.status(200).json({ message: 'Se ha actualizado con exito', reseller: body });
    })
    .catch((err) => {
      return res.status(err.status | 400).json({ message: 'No se pudo actualizar reseller' });
    })
}

exports.desactivateReseller = (req, res) => {
  const { reseller } = req.params;
  const body = req.resellerData;

  body.active = req.body.active;

  updateReseller(req.body, reseller)
    .then((success) => {
      if (body.active) {
        return res.status(200).json({ message: 'Reseller ha sido activado', reseller: body });
      }
      if (!body.active) {
        return res.status(200).json({ message: 'Reseller ha sido desactivado', reseller: body });
      }
    })
    .catch((err) => {
      return res.status(err.status | 400).json({ message: 'No se pudo actualizar reseller' });
    })
}

exports.deleteReseller = (req, res) => {
  const { reseller } = req.params;

  deleteReseller(reseller)
    .then((success) => {
      return res.status(200).json({ message: 'Reseller eliminado con éxito' });
    })
    .catch((err) => res.status(err.status | 400).json({ message: 'No se pudo eliminar reseller' }))
}

exports.resellerExist = (req, res, next) => {
  const { ownerId } = req.body;

  getResseller(ownerId)
    .then((success) => {
      if (success) {
        return next(new Error('Éste usuario ya ha sido creado antes.'))
      } else if (!success) {
        return next();
      }
    })
    .catch((err) => {
      console.log(err.message);
      return next(new Error(err));
    })
}

exports.validatePermission = (req, res, next) => {
  const admin = req.headers['api-key'];
  const apiKey = res.locals.owner;

  if (admin === apiKey && res.locals.data['userRole'] === 'OWNER') {
    return next();
  } else {
    return next(new Error('¡Ups! No cuentas con los permisos necesarios para realizar esta acción.'))
  }
}


exports.resellerById = (req, res, next, id) => {
  getResseller(id)
    .then((success) => {
      const { ownerId, userRole, ownerName, ownerLastName, phone, email, active, adminId, apiKey } = success;
      req.resellerData = { ownerId, userRole, ownerName, ownerLastName, phone, email, active, adminId, apiKey };
      next();
    })
    .catch((err) => {
      return res.status(err.status | 400).json({ message: 'No se encontró reseller' });
    })
}

*/
