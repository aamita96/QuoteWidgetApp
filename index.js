let request = require('request');

request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", (err, response, body) => {
    let bodyJSON = JSON.parse(body);
    let randomQuote = bodyJSON[0]["content"];
    document.getElementById('quote').innerHTML = randomQuote;
})

setInterval(() => {
    request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", (err, response, body) => {
        let bodyJSON = JSON.parse(body);
        let randomQuote = bodyJSON[0]["content"];
        document.getElementById('quote').innerHTML = randomQuote;
    })

}, 40000)