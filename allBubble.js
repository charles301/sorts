var fs = require("fs")
const {array100} = require('./array100.js') 
const {array1000} = require('./array1000.js') 
const {array10000} = require('./array10000.js') 
const {array100000} = require('./array100000.js') 
const {array200000} = require('./array200000.js') 
const {array300000} = require('./array300000.js') 
const {array400000} = require('./array400000.js') 
const {array500000} = require('./array500000.js') 

// writes to file

function writeToFile(value1){
    fs.appendFileSync("./allBubble.csv", +value1+ "\n")
}

//   BUBBLE 100

function bubbleSort(a)
{
var swapped;
do {
swapped = false;
for (var i=0; i < a.length-1; i++) {
if (a[i] > a[i+1]) {
var temp = a[i];
a[i] = a[i+1];
a[i+1] = temp;
swapped = true;
}
}
} while (swapped);
}
var start = new Date().getTime()

bubbleSort(array100);
var end = new Date().getTime()
var time = end - start
writeToFile ( time);

//   BUBBLE 1000

var start = new Date().getTime()

bubbleSort(array1000);
var end = new Date().getTime()
var time = end - start
writeToFile (time);

//   BUBBLE 10000


var start = new Date().getTime()
bubbleSort(array10000);
var end = new Date().getTime()
var time = end - start
writeToFile (time);

//   BUBBLE 100000

var start = new Date().getTime()
bubbleSort(array100000);
var end = new Date().getTime()
var time = end - start
writeToFile (time);

//   BUBBLE 200000

var start = new Date().getTime()

bubbleSort(array200000);
var end = new Date().getTime()
var time = end - start
writeToFile (time);

//   BUBBLE 300000
var start = new Date().getTime()

bubbleSort(array300000);
var end = new Date().getTime()
var time = end - start
writeToFile (time);

//   BUBBLE 400000

var start = new Date().getTime()

bubbleSort(array400000);
var end = new Date().getTime()
var time = end - start
writeToFile ( time);

//   BUBBLE 500000

var start = new Date().getTime()

bubbleSort(array500000);
var end = new Date().getTime()
var time = end - start
writeToFile (time);