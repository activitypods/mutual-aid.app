import urlJoin from 'url-join';
import { dataProvider, configureUserStorage, fetchAppRegistration } from '@semapps/semantic-data-provider';
import ontologies from './ontologies.json';
import dataModels from './dataModels';

const { origin: backendOrigin } = new URL(process.env.REACT_APP_BACKEND_URL);

export default dataProvider({
  resources: dataModels,
  ontologies,
  jsonContext: ['https://www.w3.org/ns/activitystreams', urlJoin(backendOrigin, '.well-known/context.jsonld')],
  returnFailedResources: true,
  plugins: [configureUserStorage(), fetchAppRegistration()]
});
