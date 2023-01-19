import React from 'react';
import { getFieldLabelTranslationArgs, useTranslate } from 'react-admin';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
    '& li': {
      marginBottom: 7,
    },
  },
}));

const BulletPointsListField = ({ children, record, resource, basePath }) => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <ul className={classes.root}>
      {React.Children.map(children, (field) =>
        field && React.isValidElement(field) && get(record, field.props.source) ? (
          <li key={field.props.source}>
            {field.props.addLabel ? (
              <>
                <strong>
                  {translate(
                    ...getFieldLabelTranslationArgs({
                      label: field.props.label,
                      resource,
                      source: field.props.source,
                    })
                  )}
                  :&nbsp;
                </strong>
                {React.cloneElement(field, {
                  record,
                  resource,
                  basePath,
                })}
              </>
            ) : typeof field.type === 'string' ? (
              field
            ) : (
              React.cloneElement(field, {
                record,
                resource,
                basePath,
              })
            )}
          </li>
        ) : null
      )}
    </ul>
  );
};

BulletPointsListField.defaultProps = {
  addLabel: true,
  source: 'id',
};

export default BulletPointsListField;
