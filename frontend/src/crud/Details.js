import React from 'react';
import { SelectField, DateField, useRecordContext, useTranslate } from 'react-admin';
import { Typography } from '@mui/material';
import IconsList from '../commons/lists/IconsList';
import EventIcon from '@mui/icons-material/Event';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import { types, resourceTypes } from '../config/constants';
import { arrayOf } from '../utils';

// Select the specialized type (not maid:Offer nor maid:Request)
const ExchangeTypeField = ({ source }) => {
  const translate = useTranslate();
  const record = useRecordContext();
  const recordTypes = arrayOf(record[source]);
  const label = Object.entries(types).find(([t]) => recordTypes.includes(t))[1];
  return <Typography component="span">{translate(label)}</Typography>;
};

const Details = props => {
  return (
    <IconsList {...props}>
      <ExchangeTypeField source="type" label="app.input.exchange_type" icon={<SyncIcon />} />
      <SelectField
        source="maid:offerOfResourceType"
        label="app.input.resource_type"
        choices={Object.entries(resourceTypes).map(([k, v]) => ({ id: k, name: v }))}
        icon={<NaturePeopleOutlinedIcon />}
      />
      <DateField
        source="dc:created"
        locales={process.env.REACT_APP_LANG}
        options={{ year: 'numeric', month: 'long', day: 'numeric' }}
        icon={<EventIcon />}
      />
    </IconsList>
  );
};

export default Details;
