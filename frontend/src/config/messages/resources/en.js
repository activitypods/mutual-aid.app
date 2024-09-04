const offerAndRequestConfig = {
  name: 'Ad |||| Ads',
  fields: {
    'pair:label': 'Title',
    'pair:depictedBy': 'Image',
    'pair:description': 'Description',
    'dc:creator': 'Posted by',
    'dc:created': 'Date',
    'maid:hasGeoCondition.pair:hasLocation': 'Location',
    'maid:hasReciprocityCondition.maid:amount': 'Price',
    'maid:hasReciprocityCondition.maid:maxAmount': 'Max price',
    'maid:hasReciprocityCondition.maid:currency': 'Currency',
    'maid:hasReciprocityCondition.maid:inExchangeOf': 'In exchange of',
    'maid:hasTimeCondition.maid:maxDuration': 'Max loan duration',
    'maid:hasTimeCondition.maid:minDuration': 'Min loan duration',
    'maid:hasTimeCondition.maid:expirationDate': 'Expiration date'
  }
};

module.exports = {
  resources: {
    OfferAndRequest: offerAndRequestConfig,
    offers: offerAndRequestConfig,
    requests: offerAndRequestConfig,
    Location: {
      name: 'Address |||| Addresses',
      fields: {
        'vcard:given-name': 'Name',
        'vcard:hasAddress': 'Address',
        'vcard:note': 'Comment'
      }
    }
  }
};
