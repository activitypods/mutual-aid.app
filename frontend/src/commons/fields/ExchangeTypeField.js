import React from 'react';
import { useRecordContext, useTranslate } from 'react-admin';
import { Typography } from '@mui/material';
import { types } from '../../config/constants';
import { arrayOf } from '../../utils';

const ExchangeTypeField = ({ source }) => {
  const translate = useTranslate();
  const record = useRecordContext();
  const recordTypes = arrayOf(record[source]);
  const label = Object.entries(types).find(([t]) => recordTypes.includes(t))[1];
  return <Typography component="span">{translate(label)}</Typography>;
};

export default ExchangeTypeField;
