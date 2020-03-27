const crypto = require('crypto');
const connection = require('../database/conections');

module.exports = {
    async listar(request,response) {
        const cons = await connection('ongs').select('*');

    return response.json(cons);
    },

    async criar(request,response) {
        const {nome, email, whatsapp, cidade, uf} = request.body;//query de consulta navegador
    
    const id = crypto.randomBytes(4).toString('HEX');
        //await connection('ongs').delete();
     await connection('ongs').insert({
        id,
        nome,
        email,
        whatsapp,
        cidade,
        uf
    }); 

    return response.json(id);
    }
}