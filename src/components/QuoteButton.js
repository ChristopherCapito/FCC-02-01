import React from 'react';
import { Button } from '@material-ui/core';

const QuoteButton = props => {
  return (
    <div>
      <Button id="new-quote" onClick={props.handleClick} variant='contained'>Get Quote</Button>
    </div>
  );
};

export default QuoteButton;
