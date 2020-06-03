var fs = require("fs");
var stream;
stream = fs.createWriteStream("writedocu");
stream.write("writing file in node.js. ");
stream.write("This documents was created to check if i was able to write ");
stream.write("into a file using fs for my node.js application.");
console.log("it is written successfully");