'use strict';

module.exports = function(app){
    app.dataSources.postgre2.autoupdate(['turno', 'consulta', 'usuario_atencion', 'estado'], err =>{
        if (err) throw err;
        console.log('Models Synced');
    })
}