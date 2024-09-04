import * as React from 'react';
import { Chip as MuiChip } from '@mui/material';

const Chip = ({ children, ...rest }) => {
  return (
    <MuiChip
      size="small"
      label={children}
      sx={{
        backgroundColor: 'unset',
        height: 20,
        '& .MuiChip-icon': {
          width: 14,
          height: 14,
          marginLeft: 0,
          marginRight: 0
        },
        '& .MuiChip-label': {
          paddingLeft: 0.5,
          paddingRight: 2,
          '& span': {
            fontSize: '12px',
            fontWeight: 'bold'
          }
        }
      }}
      {...rest}
    />
  );
};

export default Chip;
