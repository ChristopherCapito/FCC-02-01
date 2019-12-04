import React from 'react';
import { Box, Typography, Icon } from '@material-ui/core';

const Quote = props => {
  return (
    <Box>
      <Box id='text'>
        <Icon className='fas fa-quote-left' fontSize='large' />
        <Typography component='span' variant='h4'>
          {` ${props.quote}`}
        </Typography>
      </Box>
      <Box id='author' my={2}>
        <Typography align='right' variant='h5'>
          - {props.author}
        </Typography>
      </Box>
    </Box>
  );
};

export default Quote;
