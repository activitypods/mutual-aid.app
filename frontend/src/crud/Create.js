import React from 'react';
import { CreateBase, useTranslate } from 'react-admin';
import Form from './Form';
import CreatePage from '../layout/CreatePage';

const addConditionClasses = data => {
  if (data['maid:hasGeoCondition']) {
    data['maid:hasGeoCondition'].type = 'maid:GeoCondition';
  }
  if (data['maid:hasTimeCondition']) {
    data['maid:hasTimeCondition'].type = 'maid:TimeCondition';
  }
  if (data['maid:hasReciprocityCondition']) {
    data['maid:hasReciprocityCondition'].type = 'maid:ReciprocityCondition';
  }
  return data;
};

const Create = props => {
  const translate = useTranslate();
  return (
    <CreateBase {...props} transform={addConditionClasses} redirect="show">
      <CreatePage title={translate('app.page.post')}>
        <Form component="div" />
      </CreatePage>
    </CreateBase>
  );
};

export default Create;
