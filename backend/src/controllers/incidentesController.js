const conection = require('../database/conections');

module.exports = {
    async listar(request,response) {
        const { page = 1} = request.query;
        const Tcont = await conection('incidentes')
        .count('*');
        response.header('X-Total-Count', Tcont[0]['count(*)']);

        //console.log(Tcaso);
        const cons =  await conection('incidentes')
        .join('ongs', 'ongs.id','=','incidentes.ong_id')
        .limit(5)//limito em 5 visualições de incidentes
        .offset((page - 1) * 5) //ajusto para que a 1ª paginas começa e 0 e na proxima salte 5
        .select('incidentes.*', 'ongs.nome', 'ongs.email', 'ongs.whatsapp', 'ongs.cidade', 'ongs.uf');
        
        
         
        return response.json(cons);
    },

    async criar(request,response) {
        const { titulo, descricao, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await conection('incidentes').insert({
            titulo,
            descricao,
            value,
            ong_id,
        });
        return response.json({ id });
    },

    async deleta(request,response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const inc = await conection('incidentes').where('id',id).
        select('ong_id').first();

        if(inc.ong_id !== ong_id ){
            return response.status(401).json({error: "Não possue autorização"});
        }

        await conection('incidentes').where('id',id).delete();

        return response.status(204).send();
    }
};