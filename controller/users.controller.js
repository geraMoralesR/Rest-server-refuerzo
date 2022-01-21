const { response } = require("express")


const usuariosGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get API - controller',
    })
}
const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        ok: true,
        msg: 'put API - controller',
        id
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre,edad,id,apellido} = req.body;

    res.json({
        ok: true,
        msg: 'post API - controller',
        nombre,
        edad,
        apellido,
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controller'
    })
}

const usuariosPath = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controller'
    })
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPath
}