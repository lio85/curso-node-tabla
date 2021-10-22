const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base table'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Limit table'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Show table'
    })
    .check((argv, options) => {
        let errorBase= false;
        let errorHasta= false;
        if (isNaN(argv.b)) {
            errorBase=true
            //throw ("La base tiene que ser un número")
        };
        if (isNaN(argv.h)) {
            errorHasta=true
            //throw ("La base tiene que ser un número")
        } 
        if (errorBase && errorHasta){
            throw ("-b y -h tienen que ser valores numéricos");
        } else if (errorBase){
            throw ("-b tiene que ser un valor numérico");
        } else if (errorHasta){
            throw ("-h tiene que ser un valor numérico");
        }
        //else {
        return true
        //} 
        })
    .argv;

module.exports= argv;

