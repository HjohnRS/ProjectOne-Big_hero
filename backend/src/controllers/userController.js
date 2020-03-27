const conecta = require('../database/conections');

module.exports = {
    async consUser(request,response){
         const  ong_id  = request.headers.authorization;//busca ide da ong que vem por cabeçalho
        const cons = await conecta('incidentes').where('ong_id',ong_id)
        .select('*');//join('ongs').select('id').
        //console.log(ong_id);
        return response.json(cons);
    }
}