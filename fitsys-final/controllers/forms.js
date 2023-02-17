var user = require('./../forms/usuario.js')

module.export = function (req, res) {

    switch (req.body.form_id) {
        case 'user.new':
            var userNew = require('../forms/usuario/new')
            return userNew();
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