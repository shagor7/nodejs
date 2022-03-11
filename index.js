//const _= require('lodash');

//console.log(_.last([1,2,3]));

//let a = 5;
//console.log(a);
//setTimeout(() => {
//    console.log(global);
//}, 1000);
//console.log(__dirname);
//console.log(__filename);
//const people = require('./people');
//console.log(people.people);
//console.log(people.a);
//people.test();
//const path = require('path');

//const myPath = 'E:/ist/nodejs/index.js';

//console.log(path.extname(myPath));
//const os = require('os');

//console.log(os.cpus());

//const fs = require('fs');

//fs.readFile('myfile.txt', (err, data) => {
//    console.log(data.toString());
//});
//console.log('hello');
/*
const School = require('./school.js');

const school = new School();

//register a listener for bellRing event
school.on('bellRing', ({period, text}) => {
    console.log(`We need to run because ${period} ${text}!`);
});
school.startPeriod();
*/
/*
const { Socket } = require('dgram');
const http =  require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.write('Hello programmers!');
    res.write('how you doin?');
    res.end();
    }
    else if(req.url === '/about'){
        res.write('This is about us page');
        res.end();
    }else{
        res.write('Not Found');
        res.end();
    }
} );

server.listen(3000);

console.log(' listening on port 3000');
*/
// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/myfile.txt`);

// ourReadStream.on('data', (chunk) =>{
//     console.log(chunk);
// } );

// console.log('hello');
/*
const http =  require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html><head><title>Form</title></head></html>');
        res.write('<body><form method="post" action="/process"><input name="message"/></form></body>');
        res.end();
    }
    else if(req.url === '/process' && req.method==="POST"){
        //console.log(req.data);
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.write('Thank you for submitting');
        res.end();
    }else{
        res.write('Not Found');
        res.end();
    }
} );

server.listen(3000);

console.log('listening on port 3000');
*/
// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/myfile.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// // ourReadStream.on('data', (chunk) =>{
// //     ourWriteStream.write(chunk);
// // } );
// ourReadStream.pipe(ourWriteStream);

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const myReadStream = fs.createReadStream(__dirname + '/myfile.txt', 'utf-8');
//     myReadStream.pipe(res);
// });

// server.listen(3000);
// console.log('listening on port 3000');

