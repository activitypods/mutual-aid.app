import React from 'react';
import { useCreateContext } from 'react-admin';
import { Container, Typography, Card, Box } from '@mui/material';

const CreatePage = ({ title, actions, children, ...rest }) => {
  const createContext = useCreateContext(rest);
  return (
    <Container maxWidth="md">
      <Card>
        <Box p={{ xs: 2, sm: 3 }} pb={{ xs: 5, sm: 3 }}>
          <Typography variant="h2">{title}</Typography>
          {React.cloneElement(children, { ...createContext, component: 'div' })}
        </Box>
      </Card>
    </Container>
  );
};

export default CreatePage;
