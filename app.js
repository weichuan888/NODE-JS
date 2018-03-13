var sayHelloInEnglish = function() {
  return "HELLO";
}
module.exports.English = sayHelloInEnglish;

var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));
