const urlJoin = require('url-join');

const dataModels = {
  offers: {
    shapeTreeUri: urlJoin(process.env.REACT_APP_SHAPE_REPOSITORY_URL, 'shapetrees/maid/Offer')
  },
  requests: {
    shapeTreeUri: urlJoin(process.env.REACT_APP_SHAPE_REPOSITORY_URL, 'shapetrees/maid/Request')
  },
  OfferAndRequest: {
    types: ['maid:Offer', 'maid:Request']
  },
  Actor: {
    types: ['as:Actor']
  },
  Profile: {
    shapeTreeUri: urlJoin(process.env.REACT_APP_SHAPE_REPOSITORY_URL, 'shapetrees/as/Profile')
  },
  Location: {
    shapeTreeUri: urlJoin(process.env.REACT_APP_SHAPE_REPOSITORY_URL, 'shapetrees/vcard/Location')
  },
  Group: {
    shapeTreeUri: urlJoin(process.env.REACT_APP_SHAPE_REPOSITORY_URL, 'shapetrees/vcard/Group'),
    list: {
      blankNodes: ['vcard:hasMember']
    }
  }
};

export default dataModels;
