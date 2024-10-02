import React from 'react';
import { useRecordContext, useTranslate } from 'react-admin';
import { Typography } from '@mui/material';
import { types } from '../../config/constants';
import { arrayOf } from '../../utils';

const ExchangeTypeField = ({ source }) => {
  const translate = useTranslate();
  const record = useRecordContext();
  const recordTypes = arrayOf(record[source]);
  const label = Object.entries(types).find(([t]) => recordTypes.includes(t));
  return label?.[1] ? <Typography component="span">{translate(label[1])}</Typography> : null;
};

export default ExchangeTypeField;
