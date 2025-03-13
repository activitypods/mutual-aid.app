import React from 'react';
import { Admin, Resource, CustomRoutes, memoryStore } from 'react-admin';
import { Route, BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { LoginPage, RedirectPage } from '@activitypods/react';

import authProvider from './config/authProvider';
import dataProvider from './config/dataProvider';
import i18nProvider from './config/i18nProvider';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

import Layout from './layout/Layout';
import theme from './config/theme';

import Create from './crud/Create';
import Edit from './crud/Edit';
import Show from './crud/Show';
import List from './crud/List';

const MyLoginPage = props => (
  <LoginPage
    customPodProviders={
      process.env.REACT_APP_POD_PROVIDER_BASE_URL && [
        { 'apods:baseUrl': process.env.REACT_APP_POD_PROVIDER_BASE_URL, 'apods:area': 'Local' }
      ]
    }
    clientId={process.env.REACT_APP_BACKEND_CLIENT_ID}
    {...props}
  />
);

const App = () => (
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <Admin
        disableTelemetry
        title={process.env.REACT_APP_NAME}
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        loginPage={MyLoginPage}
        layout={Layout}
        theme={theme}
        store={memoryStore()}
      >
        <Resource name="offers" create={Create} edit={Edit} show={Show} list={List} />
        <Resource name="requests" create={Create} edit={Edit} show={Show} list={List} />
        <Resource name="Actor" />
        <Resource name="Profile" />
        <Resource name="Location" />
        <Resource name="Group" />
        <CustomRoutes>
          <Route path="/post" element={<PostPage />} />
        </CustomRoutes>
        <CustomRoutes noLayout>
          <Route exact path="/r" element={<RedirectPage />} />
          <Route exact path="/" element={<HomePage />} />
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </StyledEngineProvider>
);

export default App;
