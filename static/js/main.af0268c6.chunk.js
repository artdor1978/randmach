(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(3),i=n.n(a),c=(n(15),n(4)),u=n(5),s=n(7),l=n(6),h=n(1),d=n(8);n(16);function f(t){return t.replace(/&#([0-9]{1,4});/gi,function(t,e){var n=parseInt(e,10);return String.fromCharCode(n)})}var w=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={quote:{content:"",title:""}},n.getQuote=n.getQuote.bind(Object(h.a)(n)),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var t=this,e=Math.floor(1126*Math.random());fetch("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_="+e).then(function(t){if(t.ok)return t.json();throw new Error("Request failed.")}).then(function(e){t.setState({quote:e[0]})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return r.a.createElement("div",{id:"quote-box"},r.a.createElement("div",{id:"text"},'"'+f(this.state.quote.content.replace(/<\/?[^>]+>/gi,""))),r.a.createElement("div",{id:"author"},"- "+this.state.quote.title),r.a.createElement("a",{id:"tweet-quote",target:"_blank",title:"Tweet this quote!",href:'http://twitter.com/intent/tweet?&text="'+f(this.state.quote.content.replace(/<\/?[^>]+>/gi,""))+" "+this.state.quote.title,rel:"noopener noreferrer"},r.a.createElement("i",{class:"fa fa-twitter"})),r.a.createElement("button",{class:"btn",id:"new-quote",onClick:this.getQuote},"New Quote"))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.af0268c6.chunk.js.map