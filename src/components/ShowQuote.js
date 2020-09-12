import React from 'react'

const ShowQuote = ({quotes, getQuotes, isLoading}) => {
    const randomNum = Math.floor(Math.random()*quotes.length);
    if(quotes.length === 0) {
        return null;
    }
    const text = quotes[randomNum].text;
    const author = quotes[randomNum].author;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    return (
        <div className="details">
            <i className="fas fa-quote-left"></i>
            <h1 id="text">{text}</h1>
            <hr/>
            <p id="author">{author}</p>
            <div className="extra">
                <a className="twitter-share-button" href={twitterUrl} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-3x"></i></a>
                <button onClick={getQuotes} id="new-quote">New Quote</button>
            </div>
        </div>
    )
}

export default ShowQuote
