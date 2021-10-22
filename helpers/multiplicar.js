const fs= require('fs');

const colors = require('colors');

const crearArchivo= async(base= 5, hasta, listar= false) => {
    try {
        let consola=''; 
        let salida='';
        for (let i=1; i<=hasta; i++){
            consola+= `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida+= `${base} x ${i} = ${base * i}\n`;
        }
        if(listar){
            console.log('======================'.green);
            console.log('Tabla del'.green, colors.blue(base),'límite', colors.blue(hasta));
            console.log('======================'.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}-limite-${hasta}.txt`, salida);
        return `tabla-${base}-limite-${hasta}.txt`;
    } catch (err) {
        throw 'Hubo un error';
    }
}

module.exports= {
    crearArchivo
};

