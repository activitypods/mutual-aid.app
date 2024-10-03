const { PodResourcesHandlerMixin } = require('@activitypods/app');

module.exports = {
  name: 'requests',
  mixins: [PodResourcesHandlerMixin],
  settings: {
    type: 'maid:Request'
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
