const urlJoin = require('url-join');
const { AppService } = require('@activitypods/app');
const CONFIG = require('../config/config');

module.exports = {
  mixins: [AppService],
  settings: {
    app: {
      name: CONFIG.APP_NAME,
      description: CONFIG.APP_DESCRIPTION,
      thumbnail: urlJoin(CONFIG.FRONT_URL, 'logo192.png'),
      frontUrl: CONFIG.FRONT_URL
    },
    oidc: {
      clientUri: CONFIG.FRONT_URL,
      redirectUris: urlJoin(CONFIG.FRONT_URL, 'auth-callback'),
      postLogoutRedirectUris: urlJoin(CONFIG.FRONT_URL, 'login?logout=true'),
      tosUri: null
    },
    accessNeeds: {
      required: [
        {
          registeredClass: 'https://mutual-aid.app/ns/core#Offer',
          accessMode: ['acl:Read', 'acl:Write', 'acl:Control']
        },
        {
          registeredClass: 'https://mutual-aid.app/ns/core#Request',
          accessMode: ['acl:Read', 'acl:Write', 'acl:Control']
        },
        {
          registeredClass: 'vcard:Location',
          accessMode: ['acl:Read', 'acl:Write', 'acl:Control']
        },
        {
          registeredClass: 'vcard:Individual',
          accessMode: 'acl:Read'
        },
        {
          registeredClass: 'vcard:Group',
          accessMode: 'acl:Read'
        },
        'apods:ReadInbox',
        'apods:ReadOutbox',
        'apods:PostOutbox',
        'apods:QuerySparqlEndpoint',
        'apods:CreateWacGroup',
        'apods:CreateCollection',
        'apods:UpdateWebId'
      ],
      optional: []
    },
    classDescriptions: {
      'maid:Offer': {
        label: {
          en: 'Offers',
          fr: 'Offres'
        },
        labelPredicate: 'pair:label', // Is PAIR ontology registered ?
        openEndpoint: urlJoin(CONFIG.FRONT_URL, '/r')
      },
      'maid:Request': {
        label: {
          en: 'Requests',
          fr: 'Demandes'
        },
        labelPredicate: 'pair:label', // Is PAIR ontology registered ?
        openEndpoint: urlJoin(CONFIG.FRONT_URL, '/r')
      }
    },
    queueServiceUrl: CONFIG.QUEUE_SERVICE_URL
  }
};
