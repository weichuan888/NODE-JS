// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');
//
// var server = http.createServer(function(req, res) {
//     var params = querystring.parse(url.parse(req.url).query);
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     if ('prenom' in params && 'nom' in params) {
//         res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
//     }
//     else {
//         res.write('Vous devez bien avoir un prénom et un nom, non ?');
//     }
//     res.end();
// });
// server.listen(8080);

//
// on afficher dans la page du serveur le nom et prenom si on introduit cette ligne dans url
// on peut changer le nom et prénom
// http://localhost:8080/page?prenom=Robert&nom=Dupont
//



// exo page

// var http = require('http');
// var url = require('url');
//
// var server = http.createServer(function(req, res) {
//     var page = url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     if (page == '/') {
//         res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
//     }
//     else if (page == '/sous-sol') {
//         res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
//     }
//     else if (page == '/etage/1/chambre') {
//         res.write('Hé ho, c\'est privé ici !');
//     }
//     res.end();
// });
// server.listen(8080);


// exo groupe lovelace
//
// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   response.write(`
//     <!DOCTYPE html>
//     <html lang="en">
//      <head>
//       <meta charset="UTF-8">
//       <title>hello you</title>
//      </head>
//      <body>
//       <p>Hello machin</p>
//      </body>
//     </html>
//   `);
//     response.end();
// });
// server.listen(8080);



// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// // Creation de l'évenement
// var myEvent = function() {
//  console.log('Vive le terminal');
// }



//
//   var http = require(`http`);
//   var url = require(`url`);
//   var querystring = require(`querystring`);
//   var EventEmitter = require('events').EventEmitter;
//
//   var jeu = new EventEmitter();
//   var server = http.createServer();
//
// server.on(`request`, function(req, res) {
//   var urls = url.parse(req.url);
//   var page = urls.pathname;
//   var query = urls.query;
//   var params = querystring.parse(urls.query);
//
//   console.log(params);
//   res.writeHead(200, {"Content-Type": "text/html"});
//
//   if(page == `/`)  {
//     res.write(query + '<br/>' + params['papa']);
//   }
//   else if (page == `/hello`) {
//     res.write (`hello`);
//   }
//   else if (page == `/hello/Bonjour`) {
//     res.write (`Bonjour`)
//   }
//   else {
//     res.write(`404`);
//   }
//
//   res.end();
//   }
// );


var http = require(`http`);
var url = require(`url`);
var querystring = require(`querystring`);
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();

jeu.on('gameover', function(message){

  if ( message[1] > 25 ) {
    var machin = message[0] + " gagne le jeu avec " + message[1] + " points ";
  } else if ( message[1] <= 25 ){
    var machin = message[0] + " perd le jeu avec " + message[1] + " points ";
  }

  var server = http.createServer(function(req,res)){
    res.write(machin);
    res.end();
  });

  server.listen(8080);

});

jeu.emit('gameover', [`Mario`, 35]);
