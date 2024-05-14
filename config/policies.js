/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  // Permite acesso irrestrito às ações de criação de usuário
  'user/create': true,
  'user/view-create-user': true,

  // Configurações para ItemController
  'ItemController': {
    '*': true, // Permite acesso a todos os métodos de ItemController sem restrições
    'delete': true  // Permite acesso específico ao método delete sem restrições
  },

  // Se quiser aplicar uma política padrão para todos os outros controllers,
  // você pode descomentar a linha abaixo. Por exemplo, requer que o usuário
  // esteja logado para todas as ações, exceto onde especificado de outra forma.
  // '*': 'isLoggedIn',  // Isso requer que o usuário esteja logado para todas as ações

  // Se você decidir implementar a política isLoggedIn, adicione-a aqui:
  // 'isLoggedIn': function(req, res, next) {
  //   if (req.session.authenticated) {
  //     return next();
  //   }
  //   return res.forbidden('Você precisa estar logado para acessar esta funcionalidade.');
  // }
};