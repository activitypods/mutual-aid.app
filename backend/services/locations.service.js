const urlJoin = require('url-join');

module.exports = {
  name: 'locations',
  actions: {
    async giveReadPermissionsToAnnouncesGroup(ctx) {
      const { resource, actorUri } = ctx.params;

      const locationUri = resource['maid:hasGeoCondition']?.['pair:hasLocation'];

      // Give read right for the event's location (if it is set)
      if (locationUri) {
        // Guess the name of the announces collection URI as it may not have been created yet
        const announcesCollectionUri = urlJoin(resource.id, 'announces');

        const announcesGroupUri = await ctx.call('pod-wac-groups.getUriFromCollectionUri', {
          collectionUri: announcesCollectionUri
        });

        await ctx.call('pod-permissions.add', {
          uri: locationUri,
          agentPredicate: 'acl:agentGroup',
          agentUri: announcesGroupUri,
          mode: 'acl:Read',
          actorUri
        });
      }
    }
  }
};
