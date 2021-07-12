const argv = require("./config/yargs").argv;
const porHacer = require("./porHacer/porHacer");
const colors = require('colors');
let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log("Tarea creada.", tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====Por Hacer===='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================='.green);
        }
        console.log("Listado Completo.");
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log("Actualizacion realizada.");
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log("Comando no reconocido.");
        break;
}


