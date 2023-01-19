import React from 'react';
import { useEditContext, Link, linkToRecord, Button, useTranslate } from 'react-admin';
import VisibilityIcon from '@material-ui/icons/Visibility';

const ShowButton = () => {
  const { basePath, record } = useEditContext();
  const translate = useTranslate();
  return (
    <Link to={linkToRecord(basePath, record?.id, 'show')}>
      <Button label={translate('ra.action.show')}>
        <VisibilityIcon />
      </Button>
    </Link>
  );
};

export default ShowButton;
