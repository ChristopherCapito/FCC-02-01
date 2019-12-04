import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Card, Box, Container } from '@material-ui/core/';
import QuoteButton from './components/QuoteButton';
import TwitterButton from './components/TwitterButton';
//import FacebookButton from './components/FacebookButton';
import Quote from './components/Quote';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState(true);

  async function getQuote() {
    await fetch(
      'https://jsonp.afeld.me/?url=http://quotes.stormconsultancy.co.uk/random.json'
    )
      .then(res => res.json())
      .then(res => {
        setQuote(res.quote);
        setAuthor(res.author);
        setText(encodeText(res.quote,res.author))   
      })
      .catch(err => console.log(err));
  }

  const encodeText = (quote, author) => `"${encodeURIComponent(quote)}" -${encodeURIComponent(author)}`

  useEffect(() => {
    getQuote();
  },[]);

  return (
    <div
      style={{ background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)' }}
      className='App'
    >
      <Container maxWidth='md'>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
          style={{ minHeight: '100vh' }}
        >
          <Card>
            <Box id='quote-box' p={4}>
              <Quote quote={quote} author={author} />
              <Box>
                <Grid container justify='space-between'>
                  <Box>
                    {/* <FacebookButton /> */}
                    <TwitterButton
                      text={`https://twitter.com/intent/tweet?text=${text}`}
                    />
                  </Box>
                  <Box>
                    <QuoteButton handleClick={getQuote} />
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Card>
          <br />
          <a className='copy' href='https://capito.rocks/'>
            <h5>Christopher C.</h5>
          </a>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
