import React from 'react';
import { SelectField, DateField } from 'react-admin';
import IconsList from '../commons/lists/IconsList';
import EventIcon from '@mui/icons-material/Event';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import ExchangeTypeField from '../commons/fields/ExchangeTypeField';
import { resourceTypes } from '../config/constants';

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
      <SelectField
        source="maid:requestOfResourceType"
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
