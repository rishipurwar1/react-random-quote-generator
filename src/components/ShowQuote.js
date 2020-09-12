import React from 'react'
import quote from '../images/quote.svg'

const ShowQuote = ({quotes, getQuotes}) => {
    const randomNum = Math.floor(Math.random()*quotes.length);
    if(quotes.length === 0) {
        return null;
    }
    const text = quotes[randomNum].text;
    const author = quotes[randomNum].author;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    return (
        <div className="details">
            {/* {quotes[0].text} */}
            <img src={quote} alt="quote"/>
            <p id="text">{text}</p>
            <p id="author">{author}</p>
            <div className="extra">
                <a class="twitter-share-button" href={twitterUrl} target="_blank" rel="noopener noreferrer">tweet</a>
                <button onClick={getQuotes} id="new-quote">New Quote</button>
            </div>
        </div>
    )
}

export default ShowQuote
