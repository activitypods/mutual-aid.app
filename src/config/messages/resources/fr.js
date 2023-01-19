const offerAndRequestConfig = {
  name: 'Annonce |||| Annonces',
  fields: {
    'pair:label': 'Titre',
    'pair:depictedBy': 'Image',
    'pair:description': 'Présentation',
    'dc:creator': 'Posté par',
    'dc:created': 'Date',
    'mp:hasGeoCondition.pair:hasLocation': 'Localisation',
    'mp:hasReciprocityCondition.mp:amount': 'Prix demandé',
    'mp:hasReciprocityCondition.mp:maxAmount': 'Prix maximum',
    'mp:hasReciprocityCondition.mp:currency': 'Devise',
    'mp:hasReciprocityCondition.mp:inExchangeOf': 'En échange de',
    'mp:hasTimeCondition.mp:maxDuration': 'Durée maximale du prêt',
    'mp:hasTimeCondition.mp:minDuration': 'Durée minimale du prêt',
    'mp:hasTimeCondition.mp:expirationDate': "Date d'expiration de l'annonce",
  },
};

module.exports = {
  resources: {
    OfferAndRequest: offerAndRequestConfig,
    offers: offerAndRequestConfig,
    requests: offerAndRequestConfig,
  },
};
