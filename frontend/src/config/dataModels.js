const dataModels = {
  OfferAndRequest: {
    types: ['maid:Offer', 'maid:Request']
  },
  offers: {
    types: ['maid:Offer']
  },
  requests: {
    types: ['maid:Request']
  },
  Actor: {
    types: ['as:Actor'],
    list: {}
  },
  Profile: {
    types: ['vcard:Individual'],
    list: {}
  },
  Location: {
    types: ['vcard:Location'],
    list: {
      servers: 'pod'
    }
  },
  Group: {
    types: ['vcard:Group'],
    list: {
      servers: 'pod',
      containers: { pod: ['/groups'] }
    }
  }
};

export default dataModels;
