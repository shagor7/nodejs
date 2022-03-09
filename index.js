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