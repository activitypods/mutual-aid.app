import React from 'react';
import { useShowContext, Link, useCreatePath, Button, usePermissions, useTranslate } from 'react-admin';
import EditIcon from '@mui/icons-material/Edit';

const EditButton = () => {
  const { resource, record } = useShowContext();
  const { permissions } = usePermissions(record?.id);
  const createPath = useCreatePath();
  const translate = useTranslate();

  return !!permissions && permissions.some(p => ['acl:Append', 'acl:Write'].includes(p['acl:mode'])) ? (
    <Link to={createPath({ resource, type: 'edit', id: record?.id })}>
      <Button label={translate('ra.action.edit')}>
        <EditIcon />
      </Button>
    </Link>
  ) : null;
};

export default EditButton;
