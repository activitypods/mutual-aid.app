const { PodResourcesHandlerMixin } = require('@activitypods/app');

module.exports = {
  name: 'offers',
  mixins: [PodResourcesHandlerMixin],
  settings: {
    type: 'maid:Offer'
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
