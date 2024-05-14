// api/controllers/ItemController.js
module.exports = {
// Método para deletar um item
  delete: async function(req, res) {
    try {
      let deleted = await Item.destroyOne({ id: req.params.id });
      if (deleted) {
        return res.status(200).send('Item deletado.');
      }
      // Mesmo comportamento para deletar, retornando 200 OK
      return res.status(200).send('Nenhum item deletado, possível item não encontrado.');
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },

  // Método para criar um novo item
  create: async function(req, res) {
    try {
      var newItem = await Item.create({
        nome: req.body.nome,
        descricao: req.body.descricao
      }).fetch(); // Usar 'fetch()' para retornar o registro criado
      return res.status(201).json(newItem);
    } catch (error) {
      return res.serverError(error);
    }
  }
};

  