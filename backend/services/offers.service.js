const urlJoin = require('url-join');
const { PodResourcesHandlerMixin } = require('@activitypods/app');
const CONFIG = require('../config/config');

module.exports = {
  name: 'offers',
  mixins: [PodResourcesHandlerMixin],
  settings: {
    shapeTreeUri: urlJoin(CONFIG.SHAPE_REPOSITORY_URL, 'shapetrees/maid/Offer')
  },
  methods: {
    async onCreate(ctx, resource, actorUri) {
      await ctx.call('locations.giveReadPermissionsToAnnouncesGroup', { resource, actorUri });
    },
    async onUpdate(ctx, resource, actorUri) {
      // TODO use PATCH method to be able to know the previous location and remove its rights
      await ctx.call('locations.giveReadPermissionsToAnnouncesGroup', { resource, actorUri });
    }
  }
};
