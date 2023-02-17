format = require('pg-format');
import { UsuarioModel } from '../../models/UsuarioModel';
const usuarioModel = new UsuarioModel();

module.exports = (data) => {
    var formID = data.formID;
    var info = []

    // Mapa y validación de campos de formulario con base de datos
    info['status'] = (data.status == 0 || data.status == 1? data.status : 0)
    info['nombre'] = data.nombre
    info['apellidos'] = data.apellidos
    info['email_usuario'] = data.usuario
    info['clave'] = 'crypt(' + format('%s',data.clave) + ', gen_salt("bf"))'
    info['tipo'] = data.tipo

    // Almacenando datos en la BD
    return usuarioModel.new(info)

}