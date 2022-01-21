const express = require('express')
const cors = require('cors');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();
        //routes
        this.routes();
    } 
    
    middlewares(){

        //CORS
        this.app.use(cors());

        //lectura y parseo del body -- Nos permite resibir lo que manden del frontend en json
        this.app.use(express.json());

        //Directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('servidor corriendo en puerto', this.port);
        });
    }
}


module.exports = Server;