import React from 'react';
import { DateField, SelectField, TextField } from 'react-admin';
import { makeStyles, Box } from '@material-ui/core';
import { ReferenceField } from '@semapps/field-components';
import EventIcon from '@material-ui/icons/Event';
import { resourceTypes, types } from '../../config/constants';
import Chip from '../../commons/Chip';
import SyncIcon from '@material-ui/icons/Sync';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.3,
  },
  description: {
    marginTop: 10,
    fontSize: '14px',
    '& span': {
      fontSize: '14px',
    },
    display: 'block',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '3.6em',
  },
}));

const OfferCard = ({ record }) => {
  const classes = useStyles();
  return (
    <Box pt={1} pb={1}>
      <Box mb={1}>
        <TextField variant="h2" color="primary" record={record} source="pair:label" className={classes.title} />
      </Box>
      <Box>
        <Chip icon={<SyncIcon />}>
          <SelectField
            record={record}
            source="type"
            choices={Object.entries(types).map(([k, v]) => ({ id: k, name: v }))}
          />
        </Chip>
        <Chip icon={<NaturePeopleOutlinedIcon />}>
          <SelectField
            record={record}
            source="mp:offerOfResourceType"
            choices={Object.entries(resourceTypes).map(([k, v]) => ({ id: k, name: v }))}
            icon={<NaturePeopleOutlinedIcon />}
          />
        </Chip>
        <Chip icon={<EventIcon />}>
          <DateField
            record={record}
            source="dc:created"
            locales={process.env.REACT_APP_LANG}
            options={{ year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }}
            showTime
          />
        </Chip>
        <Chip icon={<FaceIcon />}>
          <ReferenceField record={record} reference="Actor" source="dc:creator" link={false}>
            <ReferenceField reference="Profile" source="url" link={false}>
              <TextField source="vcard:given-name" />
            </ReferenceField>
          </ReferenceField>
        </Chip>
      </Box>
      <TextField record={record} source="pair:description" className={classes.description} />
    </Box>
  );
};

OfferCard.defaultProps = {
  variant: 'full',
};

export default OfferCard;
