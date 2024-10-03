const dataServers = {
  pod: {
    pod: true,
    default: true,
    authServer: true,
    baseUrl: null, // Calculated from the token
    sparqlEndpoint: null,
    containers: {
      pod: {
        'maid:Offer': ['/maid/offer'],
        'maid:Request': ['/maid/request'],
        'vcard:Location': ['/vcard/location'],
        'vcard:Individual': ['/vcard/individual'],
        'vcard:Group': ['/vcard/group']
      }
    },
    uploadsContainer: '/semapps/file'
  }
};

export default dataServers;
