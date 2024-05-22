const bcryptjs = require("bcryptjs");

exports.crearUsuario = async (req, res) => {
    //console.log(req.body);
    //res.json({msg: "desde controller POST el primer request"})

    //Constante de encriptacion
    const {password, email} = req.body;


    try{
        //revisar que sea un unico correo y que no se vea el error en el codigo
        let usuario = await Usuario.findOne({ email });

        if(usuario){
            return res.status(400).json({msg:"El usuario ya existe"});
        }

        //Crear un nuevo usuario
        usuario = new Usuario(req.body);

        //Hash Encriptar
        usuario.password = await bcryptjs.hash(password,10);

        //Guardar usuario en la DB
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);

    }catch(error){
        console.log(error);
    }
};
