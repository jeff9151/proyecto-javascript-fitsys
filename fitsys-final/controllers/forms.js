var user = require('./../forms/user.js')

module.export = function (req, res) {

    switch (req.body.form_id) {
        case 'user.new':
            var userNew = require('./../forms/user/new')
            return userNew();
            break;
        case 'user.edit':
            var userEdit = require('./../forms/user/edit')
            res.send(userEdit());
            break;
        case 'user.del':
            var userDel = require('./../forms/user/del')
            res.send(userDel());
        default:
            res.send("ERROR: FORM NOT VALID")
    }
}