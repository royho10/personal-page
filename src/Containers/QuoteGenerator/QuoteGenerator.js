import React, { Component } from 'react';
import './QuoteGenerator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



class QuoteGenerator extends Component {
  constructor(props){
    super();
    this.state = {
      quote: "To be or not to be.",
      quoteAuthor: "William Shakespeare",
      longQuote: false,
      loading: false
    }
    this.getNewQuote = this.getNewQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }

  getNewQuote() {
    // Add loading animation while the fetch call is happening
    this.setState({ loading: true });
    const apiURL = 'https://type.fit/api/quotes';
    fetch(apiURL)
      .then(response => response.json())
      .then(apiQuotesArr => {
        // Pick a random quote from array
        const quote = apiQuotesArr[Math.floor(Math.random() * apiQuotesArr.length)];
        // Check of Author field is blank and replace it with 'Unknown'
        if (!quote.author) {
          this.setState({ quoteAuthor: "Unknown" });
        } else {
          // Set quote author
          this.setState({ quoteAuthor: quote.author });
        }
        // Reduce font size for long quotes
        if (quote.text.length > 120) {
          this.setState({ longQuote: true })  
        } else this.setState({ longQuote: false });
        // Set quote text
        this.setState({ quote: quote.text});
        // Remove the loading animation when we get the quote
        this.setState({ loading: false });
      })
      .catch(err => console.log('whoops, no quote', err))
  }

  tweetQuote() {
    const quote = this.state.quote;
    const author = this.state.quoteAuthor;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
  }

  render() {
    return (
      <div id="quoteGenerator" className="section">
      {/* Switching between the loading animation and the quote container depands on the loading state */}
      {this.state.loading
      ? <div className="loader"></div>
      : (<div className="quote-container" id="quote-container">
          {/* Quote */}
          <div className={`quote-text ${this.state.longQuote ? " long-quote" : ""}`} >
            <FontAwesomeIcon className="fa-quote-left" icon={faQuoteLeft} />
            <span id="quote">{this.state.quote}</span>
          </div>
          {/* Author */} 
          <div className="quote-author">
            <span id="author">{this.state.quoteAuthor}</span>
          </div>
          {/* Buttons */}
          <div className="button-container" id="button-container">
            <button className="twitter-button" id="twitter" title="Tweet This!" onClick={this.tweetQuote}>
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default QuoteGenerator;
