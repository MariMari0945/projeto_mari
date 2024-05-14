// Gera medicoCOntroller(nome, especialidade)
module.exports = {
    create: async function (req, res) {
      try {
        const {
          nome,
          especialidade
        } = req.body;
  
        const medico = await Medico.create({
          nome,
          especialidade
        }).fetch();
  
        return res.status(201).json(medico);
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar um novo médico' });
      }
    },
  
  
  };