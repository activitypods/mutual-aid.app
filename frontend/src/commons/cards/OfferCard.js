import React from 'react';
import { DateField, SelectField, TextField } from 'react-admin';
import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ReferenceField } from '@semapps/field-components';
import EventIcon from '@mui/icons-material/Event';
import Chip from '../Chip';
import SyncIcon from '@mui/icons-material/Sync';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import FaceIcon from '@mui/icons-material/Face';
import { resourceTypes, exchangeTypes } from '../../config/constants';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.3
  },
  description: {
    marginTop: 10,
    fontSize: '14px',
    '& span': {
      fontSize: '14px'
    },
    display: 'block',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '3.6em'
  }
}));

const OfferCard = () => {
  const classes = useStyles();
  return (
    <Box pt={1} pb={1}>
      <Box mb={1}>
        <TextField variant="h2" color="primary" source="pair:label" className={classes.title} />
      </Box>
      <Box>
        <Chip icon={<SyncIcon />}>
          <SelectField
            source="pair:hasType"
            choices={Object.entries(exchangeTypes).map(([k, v]) => ({ id: k, name: v }))}
          />
        </Chip>
        <Chip icon={<NaturePeopleOutlinedIcon />}>
          <SelectField
            source="maid:offerOfResourceType"
            choices={Object.entries(resourceTypes).map(([k, v]) => ({ id: k, name: v }))}
          />
        </Chip>
        <Chip icon={<EventIcon />}>
          <DateField
            source="dc:created"
            locales={process.env.REACT_APP_LANG}
            options={{ year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }}
            showTime
          />
        </Chip>
        <Chip icon={<FaceIcon />}>
          <ReferenceField reference="Actor" source="dc:creator" link={false}>
            <ReferenceField reference="Profile" source="url" link={false}>
              <TextField source="vcard:given-name" />
            </ReferenceField>
          </ReferenceField>
        </Chip>
      </Box>
      <TextField source="pair:description" className={classes.description} />
    </Box>
  );
};

OfferCard.defaultProps = {
  variant: 'full'
};

export default OfferCard;
