/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // Home and static pages
  'GET /': { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?': { action: 'dashboard/view-welcome' },
  'GET /faq': { action: 'view-faq' },
  'GET /legal/terms': { action: 'legal/view-terms' },
  'GET /legal/privacy': { action: 'legal/view-privacy' },
  'GET /contact': { action: 'view-contact' },

  // User authentication and account management
  'GET /signup': { action: 'entrance/view-signup' },
  'GET /email/confirm': { action: 'entrance/confirm-email' },
  'GET /email/confirmed': { action: 'entrance/view-confirmed-email' },
  'GET /login': { action: 'entrance/view-login' },
  'GET /password/forgot': { action: 'entrance/view-forgot-password' },
  'GET /password/new': { action: 'entrance/view-new-password' },
  'GET /account': { action: 'account/view-account-overview' },
  'GET /account/password': { action: 'account/view-edit-password' },
  'GET /account/profile': { action: 'account/view-edit-profile' },
  'GET /create-user': { action: 'user/view-create-user' },

  // Redirects
  '/terms': '/legal/terms',
  '/logout': '/api/v1/account/logout',

  // API endpoints for account management
  'PUT /api/v1/account/update-password': { action: 'account/update-password' },
  'PUT /api/v1/account/update-profile': { action: 'account/update-profile' },
  'PUT /api/v1/account/update-billing-card': { action: 'account/update-billing-card' },
  'PUT /api/v1/entrance/login': { action: 'entrance/login' },
  'POST /api/v1/entrance/signup': { action: 'entrance/signup' },
  'POST /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST /api/v1/entrance/update-password-and-login': { action: 'entrance/update-password-and-login' },
  'POST /api/v1/deliver-contact-form-message': { action: 'deliver-contact-form-message' },
  'POST /api/v1/observe-my-session': { action: 'observe-my-session', hasSocketFeatures: true },
  'POST /user/create': { action: 'user/create' },
  'POST /aluno': 'AlunoController.create',

  // config/routes.js
  'DELETE /item/:id': 'ItemController.delete', //deletar
  'GET /test': 'ItemController.test',  // Rota de teste
  'POST /item': 'ItemController.create', // criar

};

