import React, {Component} from 'react';
import './App.css';

function parseHtmlEnteties(str) {
    return str.replace(/&#([0-9]{1,4});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10); // read num as normal number
        return String.fromCharCode(num);
    });
}

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    //loading: false,
    quote: {
      content: '',
      title: ''}
  };
  this.getQuote = this.getQuote.bind(this)
}

componentDidMount() {
  this.getQuote();
}

getQuote () {
  const i = Math.floor(Math.random() * (1125 + 1))
fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_='+i)
  .then(response => {
    if(response.ok) return response.json();
      throw new Error('Request failed.');
})
  .then(data => {
    this.setState({
      quote: data[0]
  });
  })
.catch(error => {
      console.log(error);
    });
}

render() {
  return (
    <div id="quote-box">
      <div id = "text">{'"' + parseHtmlEnteties(this.state.quote.content.replace(/<\/?[^>]+>/gi, ''))}</div>
      <div id = "author">{"- " + this.state.quote.title}</div>
      <a id="tweet-quote" target="_blank" title="Tweet this quote!"
      href={'http://twitter.com/intent/tweet?&text='+'"' + parseHtmlEnteties(this.state.quote.content.replace(/<\/?[^>]+>/gi, ''))+' '+this.state.quote.title} rel="noopener noreferrer">
      <i class="fa fa-twitter"></i></a>
      <button class="btn" id = "new-quote" onClick={this.getQuote}>New Quote</button>
     </div>
 )
}
}

export default App;
