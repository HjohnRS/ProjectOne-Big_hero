 const conection = require('../database/conections');

 module.exports = {
     async create(request,response){
         const { id }  = request.body;//{} signica que quero capturar o valor da variavel id

         const ong = await conection('ongs').where('id',id)
         .select('nome').first();

         if(!ong){
             return response.status(400).json({error:'Ong não foi econtrada'});
         }

         return response.json(ong);
     }
 }