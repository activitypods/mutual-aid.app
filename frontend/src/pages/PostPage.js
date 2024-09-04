import React, { useCallback } from 'react';
import { RadioButtonGroupInput, useTranslate, useRedirect, Form, FormDataConsumer } from 'react-admin';
import { Toolbar, Button, Box, Typography, Container, Card } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: 'white',
    paddingLeft: 0
  }
}));

const getAvailableChoices = ({ type, resourceType }) => {
  let choices = [];
  if (type === 'Offer') {
    choices = [
      { id: 'Gift', name: 'app.choice.gift' },
      { id: 'Barter', name: 'app.choice.barter' },
      { id: 'Sale', name: 'app.choice.sale' }
    ];
    if (resourceType !== 'HumanBasedResource') {
      choices.push({ id: 'Loan', name: 'app.choice.loan' });
    }
  } else {
    choices = [
      { id: 'Gift', name: 'app.choice.gift' },
      { id: 'Barter', name: 'app.choice.barter' },
      { id: 'Purchase', name: 'app.choice.purchase' }
    ];
    if (resourceType !== 'HumanBasedResource') {
      choices.push({ id: 'Loan', name: 'app.choice.borrowing' });
    }
  }
  return choices;
};

const PostPage = () => {
  const classes = useStyles();
  const translate = useTranslate();
  const redirect = useRedirect();

  const onSubmit = useCallback(
    ({ type, resourceType, exchangeType }) => {
      const basePath = type === 'Offer' ? '/offers' : '/requests';
      let source = {};
      source['@type'] = ['maid:' + exchangeType + type, 'maid:' + type];
      source[`maid:${type.toLowerCase()}OfResourceType`] = 'pair:' + resourceType;
      redirect(basePath + '/create?source=' + JSON.stringify(source));
    },
    [redirect]
  );

  return (
    <Container maxWidth="md">
      <Card>
        <Box p={3}>
          <Typography variant="h2">{translate('app.action.create_ad')}</Typography>
          <Form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column">
              <RadioButtonGroupInput
                source="type"
                label=""
                choices={[
                  { id: 'Offer', name: 'app.choice.offer' },
                  { id: 'Request', name: 'app.choice.request' }
                ]}
              />
              <FormDataConsumer>
                {({ formData }) =>
                  formData.type && (
                    <RadioButtonGroupInput
                      source="resourceType"
                      label="app.input.resource_type"
                      choices={[
                        { id: 'AtomBasedResource', name: 'app.choice.atom_based_resource' },
                        { id: 'HumanBasedResource', name: 'app.choice.human_based_resource' },
                        { id: 'Resource', name: 'app.choice.other_resource' }
                      ]}
                    />
                  )
                }
              </FormDataConsumer>
              <FormDataConsumer>
                {({ formData }) => {
                  if (formData.resourceType) {
                    const choices = getAvailableChoices(formData);
                    return (
                      <RadioButtonGroupInput source="exchangeType" label="app.input.exchange_type" choices={choices} />
                    );
                  } else {
                    return null;
                  }
                }}
              </FormDataConsumer>
            </Box>
            <Toolbar className={classes.toolbar}>
              <Button
                type="submit"
                endIcon={<ArrowForwardIcon />}
                variant="contained"
                color="primary"
                // disabled={!dirtyFields.exchangeType}
              >
                {translate('app.action.continue')}
              </Button>
            </Toolbar>
          </Form>
        </Box>
      </Card>
    </Container>
  );
};

export default PostPage;
