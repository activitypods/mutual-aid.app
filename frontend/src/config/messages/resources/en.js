const offerAndRequestConfig = {
  name: 'Ad |||| Ads',
  fields: {
    'pair:label': 'Title',
    'pair:depictedBy': 'Image',
    'pair:description': 'Description',
    'dc:creator': 'Posted by',
    'dc:created': 'Date',
    'mp:hasGeoCondition.pair:hasLocation': 'Location',
    'mp:hasReciprocityCondition.mp:amount': 'Price',
    'mp:hasReciprocityCondition.mp:maxAmount': 'Max price',
    'mp:hasReciprocityCondition.mp:currency': 'Currency',
    'mp:hasReciprocityCondition.mp:inExchangeOf': 'In exchange of',
    'mp:hasTimeCondition.mp:maxDuration': 'Max loan duration',
    'mp:hasTimeCondition.mp:minDuration': 'Min loan duration',
    'mp:hasTimeCondition.mp:expirationDate': 'Expiration date',
  },
};

module.exports = {
  resources: {
    OfferAndRequest: offerAndRequestConfig,
    offers: offerAndRequestConfig,
    requests: offerAndRequestConfig,
  },
};
