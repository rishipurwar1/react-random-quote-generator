import React, {useEffect, useState} from 'react';
import './App.css';
import ShowQuote from './components/ShowQuote'
import loader from './images/loader.svg'

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getQuotes = async () => {
    setIsLoading(true);
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    setQuotes(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getQuotes();
  },[])

  return (
    <div id="quote-box">
      {isLoading ? <div className="loader">
            <img src={loader} alt="Rocket Loading Animation" />
        </div> : <ShowQuote isLoading={isLoading} quotes={quotes} getQuotes={getQuotes} />}
    </div>
  );
}

export default App;
