import React from 'react';
import { EditBase } from 'react-admin';
import Form from './Form';
import EditPage from '../layout/EditPage';
import Title from './Title';
import ShowButton from '../commons/buttons/ShowButton';

const addConditionClasses = (data) => {
  if (data['mp:hasGeoCondition']) {
    data['mp:hasGeoCondition'].type = 'mp:GeoCondition';
  }
  if (data['mp:hasTimeCondition']) {
    data['mp:hasTimeCondition'].type = 'mp:TimeCondition';
  }
  if (data['mp:hasReciprocityCondition']) {
    data['mp:hasReciprocityCondition'].type = 'mp:ReciprocityCondition';
  }
  return data;
};

const Edit = (props) => (
  <EditBase {...props} transform={addConditionClasses}>
    <EditPage title={<Title />} actions={<ShowButton />}>
      <Form component="div" />
    </EditPage>
  </EditBase>
);

export default Edit;
