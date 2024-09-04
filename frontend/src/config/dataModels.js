const dataModels = {
  OfferAndRequest: {
    types: [
      'maid:GiftOffer',
      'maid:BarterOffer',
      'maid:LoanOffer',
      'maid:SaleOffer',
      'maid:Offer',
      'maid:GiftRequest',
      'maid:BarterRequest',
      'maid:LoanRequest',
      'maid:PurchaseRequest',
      'maid:Request'
    ]
  },
  offers: {
    types: ['maid:GiftOffer', 'maid:BarterOffer', 'maid:LoanOffer', 'maid:SaleOffer', 'maid:Offer']
  },
  requests: {
    types: ['maid:GiftRequest', 'maid:BarterRequest', 'maid:LoanRequest', 'maid:PurchaseRequest', 'maid:Request']
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
