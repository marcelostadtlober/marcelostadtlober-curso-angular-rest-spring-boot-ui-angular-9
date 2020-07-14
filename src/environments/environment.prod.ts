export const environment = {
  production: true,
  apiUrl: 'https://mstadtlober-algamoney-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('mstadtlober-algamoney-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
