import React from 'react';
import { Box } from '@mui/material';
import { BackgroundChecks } from '@activitypods/react';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import AppBar from './AppBar';
import TopAppBar from './TopAppBar';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children, title }) => {
  const { identity, isLoading } = useCheckAuthenticated();
  if (isLoading) return null;
  return (
    <BackgroundChecks
      clientId={process.env.REACT_APP_BACKEND_CLIENT_ID}
      listeningTo={[identity?.webIdData?.inbox, identity?.webIdData?.outbox]}
    >
      <ScrollToTop />
      <TopAppBar />
      <Box mt={{ xs: 3, sm: 5 }} mb={{ xs: 2, sm: 5 }}>
        <AppBar title={title} />
        {children}
      </Box>
    </BackgroundChecks>
  );
};

export default Layout;
