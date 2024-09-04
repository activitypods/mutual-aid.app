import React, { useState, useCallback } from 'react';
import {
  SimpleForm,
  TextInput,
  ImageField,
  required,
  FormDataConsumer,
  RadioButtonGroupInput,
  useTranslate
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageInput } from '@semapps/input-components';
import { DateTimeInput } from '@semapps/date-components';
import frLocale from 'date-fns/locale/fr';
import BodyLabel from '../commons/lists/BodyLabel';
import QuickCreateLocationInput from '../commons/inputs/QuickCreateLocationInput/QuickCreateLocationInput';
import { currencies } from '../config/constants';
import { arrayOf } from '../utils';

const futureDate = value => {
  if (value && value <= new Date()) {
    return 'app.validation.futureDate';
  }
};

const dateTimeInputProps = {
  options: {
    format: 'dd/MM/yyyy à HH:mm',
    ampm: false,
    clearable: true
  },
  providerOptions: {
    locale: frLocale
  },
  fullWidth: true,
  allowClear: true
};

const TypeCondition = ({ type, children, className, ...rest }) => (
  <FormDataConsumer subscription={{ values: true }}>
    {({ formData }) =>
      arrayOf(formData.type || formData['@type']).some(t => t === type) &&
      React.Children.map(children, child => React.cloneElement(child, rest))
    }
  </FormDataConsumer>
);

const Form = props => {
  const translate = useTranslate();

  // Needed to trigger orm change and enable save button :
  // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci
  const [locationVersion, setLocationVersion] = useState(0);
  const handleLocationChange = useCallback(() => {
    setLocationVersion(locationVersion + 1);
  }, [locationVersion]);

  return (
    <SimpleForm {...props} redirect="show">
      <TextInput source="pair:label" fullWidth validate={[required()]} sx={{ mt: 2 }} />
      <MarkdownInput source="pair:description" fullWidth validate={[required()]} isRequired />
      <ImageInput source="pair:depictedBy" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <QuickCreateLocationInput
        key={locationVersion}
        reference="Location"
        source="maid:hasGeoCondition.pair:hasLocation"
        onChange={handleLocationChange}
      />
      <TypeCondition type="maid:SaleOffer">
        <BodyLabel>{translate('app.conditions.sale')}</BodyLabel>
        <TextInput source="maid:hasReciprocityCondition.maid:amount" fullWidth />
        <RadioButtonGroupInput
          source="maid:hasReciprocityCondition.maid:currency"
          choices={Object.entries(currencies).map(([k, v]) => ({ id: k, name: v }))}
        />
      </TypeCondition>
      <TypeCondition type="maid:PurchaseRequest">
        <BodyLabel>{translate('app.conditions.purchase')}</BodyLabel>
        <TextInput source="maid:hasReciprocityCondition.maid:maxAmount" fullWidth />
        <RadioButtonGroupInput
          source="maid:hasReciprocityCondition.maid:currency"
          choices={Object.entries(currencies).map(([k, v]) => ({ id: k, name: v }))}
        />
      </TypeCondition>
      <TypeCondition type="maid:BarterOffer">
        <BodyLabel>{translate('app.conditions.barter')}</BodyLabel>
        <TextInput source="maid:hasReciprocityCondition.maid:inExchangeOf" fullWidth />
      </TypeCondition>
      <TypeCondition type="maid:LoanOffer">
        <BodyLabel>{translate('app.conditions.loan')}</BodyLabel>
        <TextInput source="maid:hasTimeCondition.maid:maxDuration" fullWidth />
      </TypeCondition>
      <TypeCondition type="maid:LoanRequest">
        <BodyLabel>{translate('app.conditions.borrowing')}</BodyLabel>
        <TextInput source="maid:hasTimeCondition.maid:minDuration" fullWidth />
      </TypeCondition>
      <BodyLabel>{translate('app.conditions.other')}</BodyLabel>
      <DateTimeInput
        source="maid:hasTimeCondition.maid:expirationDate"
        validate={[futureDate]}
        {...dateTimeInputProps}
      />
    </SimpleForm>
  );
};

export default Form;
