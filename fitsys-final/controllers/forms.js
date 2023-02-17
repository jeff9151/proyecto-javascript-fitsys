var {Usuario} = require('./../forms/usuario.js')

module.export = function (formID, data) {

    switch (formID) {
        case 'usuario.nuevo':
            const {Usuario} = require('../forms/usuario/nuevo')
            var user = new Usuario()
            return user.nuevo(data);
            break;
        case 'usuario.editar':
            var userEdit = require('../forms/usuario/editar')
            res.send(userEdit());
            break;
        case 'usuario.eliminar':
            var userDel = require('../forms/usuario/del')
            res.send(userDel());
        default:
            res.send("ERROR: FORM NOT VALID")
    }
}