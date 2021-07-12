const opts = {
    crear: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descipcion de la tarea por hacer.'
        }
    },
    actualizar: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descipcion de la tarea por hacer.'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea.'
        }
    },
    borrar: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descipcion de la tarea por hacer.'
        }
    }
}
const argv = require("yargs")
    .command("crear", 'Crear un elemento por hacer.', opts.crear)
    .command("actualizar", 'Actualizar el estado completado de una tarea', opts.actualizar)
    .command("borrar", 'Borrar una tarea', opts.borrar)
    .help()
    .argv;




module.exports = {
    argv
}