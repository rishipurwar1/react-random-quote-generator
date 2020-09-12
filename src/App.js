import React, {useEffect, useState} from 'react';
import './App.css';
import ShowQuote from './components/ShowQuote'

const App = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    setQuotes(data);
  }

  useEffect(() => {
    getQuotes();
  },[])

  return (
    <div id="quote-box">
      <ShowQuote quotes={quotes} getQuotes={getQuotes} />
    </div>
  );
}

export default App;
