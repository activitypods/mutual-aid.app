import React from 'react';
import { EditBase } from 'react-admin';
import Form from './Form';
import EditPage from '../layout/EditPage';
import Title from './Title';
import ShowButton from '../commons/buttons/ShowButton';

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

const Edit = props => (
  <EditBase {...props} transform={addConditionClasses}>
    <EditPage title={<Title />} actions={<ShowButton />}>
      <Form component="div" />
    </EditPage>
  </EditBase>
);

export default Edit;
