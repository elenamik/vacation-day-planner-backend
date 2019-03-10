const http=require('http');

function onRequest(request,response){
    response.writeHead(200,{'Content-Type':'text/plan'})
    response.write('Hello world! :-)');
    response.end(); //done with handling response
}

http.createServer(onRequest).listen(8000);

 