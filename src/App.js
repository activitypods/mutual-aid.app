import React from 'react';
import { Admin, Resource, CustomRoutes, memoryStore } from 'react-admin';
import { Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import authProvider from './config/authProvider';
import dataProvider from './config/dataProvider';
import i18nProvider from './config/i18nProvider';

import HomePage from './pages/HomePage';
// import PostPage from './pages/PostPage';
import RedirectPage from "./pages/RedirectPage";
import PodLoginPage from './pages/PodLoginPage/PodLoginPage';

import Layout from './layout/Layout';
import theme from './config/theme';

import Create from './crud/Create';
import Edit from './crud/Edit';
import Show from './crud/Show';
import List from './crud/List';

const customPodProviders = process.env.REACT_APP_POD_PROVIDER_DOMAIN_NAME
  && [{ 'apods:domainName': process.env.REACT_APP_POD_PROVIDER_DOMAIN_NAME, 'apods:area': 'Local' }];

const LoginPage = props => <PodLoginPage customPodProviders={customPodProviders} {...props} />

const App = () => (
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Admin
          disableTelemetry
          title={process.env.REACT_APP_NAME}
          authProvider={authProvider}
          dataProvider={dataProvider}
          i18nProvider={i18nProvider}
          loginPage={LoginPage}
          layout={Layout}
          theme={theme}
          store={memoryStore()}
        >
          <Resource name="offers" create={Create} edit={Edit} show={Show} list={List} />
          <Resource name="requests" create={Create} edit={Edit} show={Show} list={List} />
          <Resource name="OfferAndRequest" list={List} />
          <Resource name="Actor" />
          <Resource name="Profile" />
          <Resource name="Location" />
          <Resource name="Group" />
          <CustomRoutes>
            <Route exact path="/r" element={<RedirectPage />} />,
          </CustomRoutes>
          <CustomRoutes noLayout>
            <Route exact path="/" element={<HomePage />} />,
            {/* <Route path="/post" component={PostPage} />, */}
          </CustomRoutes>
        </Admin>
      </ThemeProvider>
    </BrowserRouter>
  </StyledEngineProvider>
);

export default App;
