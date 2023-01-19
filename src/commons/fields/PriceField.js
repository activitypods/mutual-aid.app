import React from 'react';
import { useRecordContext } from 'react-admin';
import get from 'lodash/get';

const PriceField = ({ source, currency, currencies }) => {
  const record = useRecordContext();
  return (
    <span>
      {get(record, source)} {currencies[get(record, currency)]}
    </span>
  );
};

PriceField.defaultProps = {
  addLabel: true,
  currencies: {},
};

export default PriceField;
