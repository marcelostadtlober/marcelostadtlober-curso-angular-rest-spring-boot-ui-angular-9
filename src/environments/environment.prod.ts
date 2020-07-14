export const environment = {
  production: true,
  apiUrl: 'https://mstadtlober-algamoney-api.herokuapp.com',

  tokenWhitelistedDomains: [ /mstadtlober-algamoney-api.herokuapp.com/ ],
  tokenBlacklistedRoutes: [/\/oauth\/token/]
};
