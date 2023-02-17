var user = require('./../forms/usuario.js')

module.export = function (formID, data) {

    switch (formID) {
        case 'user.new':
            const {Usuario} = require('./../forms/usuario/new')
            var user = new Usuario()
            return user.new(data);
            break;
        case 'user.edit':
            var userEdit = require('../forms/usuario/edit')
            res.send(userEdit());
            break;
        case 'user.del':
            var userDel = require('../forms/usuario/del')
            res.send(userDel());
        default:
            res.send("ERROR: FORM NOT VALID")
    }
}