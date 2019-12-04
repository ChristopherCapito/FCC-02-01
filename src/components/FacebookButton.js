import React from 'react';
import { Button, Icon, Box } from '@material-ui/core';

const FacebookButton = props => {
  return (
    <Box component='span' mr={1}>
      <Button variant='contained'>
        <Icon className='fab fa-facebook-f' />
      </Button>
    </Box>
  );
};

export default FacebookButton;
