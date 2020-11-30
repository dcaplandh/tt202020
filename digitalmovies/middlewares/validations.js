const { body,check } = require('express-validator');

const validations = {
    userRegister: [
        //check('passwordConfirmation)....
        body('passwordConfirmation').custom((value, { req }) => {
        
          if (value != req.body.password) {
            return false;
          }
          // Indicates the success of this synchronous custom validator
          return true;
        }).withMessage("Contraseñas no coinciden")
    ],
    altaProducto: [],
    edicionDePerfilDelUsuario: [],
    login:[]
}

module.exports = validations;