const connect = require('connect');
var url = require('url');
const app = connect();
app.listen(3000);

console.log('the app is running on http://localhost:3000');


function calculate(request, response, next){
    let queryString = url.parse(request.url, true).query;
    let method = queryString.method;
    let x = parseInt(queryString.x);
    let y = parseInt(queryString.y);
    if (method == 'add'){
        response.end(x+' + '+y+' = '+String(x+y));
    }
    else if (method == 'subtract'){
        response.end(x+' - '+y+' = '+String(x-y));
    }
    else if (method == 'multiply'){
        response.end(x+' * '+y+' = '+String(x*y));
    }
    else if (method == 'divide'){
        response.end(x+' / '+y+' = '+String (x/y));
    }
    else {
        response.end('error!');
    }
    
}
app.use(calculate); 












