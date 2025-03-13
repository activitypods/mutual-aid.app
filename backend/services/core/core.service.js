const path = require('path');
const { CoreService } = require('@semapps/core');
const { apods, notify, interop, oidc, pair, skos } = require('@semapps/ontologies');
const CONFIG = require('../../config/config');

const maid = {
  prefix: 'maid',
  namespace: 'https://mutual-aid.app/ns/core#',
  jsonldContext: {
    xsd: 'http://www.w3.org/2001/XMLSchema#',
    'maid:offerOfResourceType': {
      '@type': '@id'
    },
    'maid:requestOfResourceType': {
      '@type': '@id'
    },
    'maid:expirationDate': {
      '@type': 'xsd:dateTime'
    }
  }
};

module.exports = {
  mixins: [CoreService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    baseDir: path.resolve(__dirname, '../..'),
    triplestore: {
      url: CONFIG.SPARQL_ENDPOINT,
      user: CONFIG.JENA_USER,
      password: CONFIG.JENA_PASSWORD,
      mainDataset: CONFIG.MAIN_DATASET
    },
    ontologies: [maid, pair, apods, notify, interop, oidc, skos],
    activitypub: {
      queueServiceUrl: CONFIG.QUEUE_SERVICE_URL
    },
    api: {
      port: CONFIG.PORT
    },
    ldp: {
      resourcesWithContainerPath: false
    },
    void: false
  }
};
