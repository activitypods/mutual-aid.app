const offerAndRequestConfig = {
  name: 'Annonce |||| Annonces',
  fields: {
    'pair:label': 'Titre',
    'pair:depictedBy': 'Image',
    'pair:description': 'Présentation',
    'dc:creator': 'Posté par',
    'dc:created': 'Date',
    'maid:hasGeoCondition.pair:hasLocation': 'Localisation',
    'maid:hasReciprocityCondition.maid:amount': 'Prix demandé',
    'maid:hasReciprocityCondition.maid:maxAmount': 'Prix maximum',
    'maid:hasReciprocityCondition.maid:currency': 'Devise',
    'maid:hasReciprocityCondition.maid:inExchangeOf': 'En échange de',
    'maid:hasTimeCondition.maid:maxDuration': 'Durée maximale du prêt',
    'maid:hasTimeCondition.maid:minDuration': 'Durée minimale du prêt',
    'maid:hasTimeCondition.maid:expirationDate': "Date d'expiration de l'annonce"
  }
};

module.exports = {
  resources: {
    OfferAndRequest: offerAndRequestConfig,
    offers: offerAndRequestConfig,
    requests: offerAndRequestConfig,
    Location: {
      name: 'Adresse |||| Adresses',
      fields: {
        'vcard:given-name': 'Nom du lieu',
        'vcard:hasAddress': 'Adresse',
        'vcard:note': 'Indications'
      }
    }
  }
};
