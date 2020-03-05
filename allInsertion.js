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
    fs.appendFileSync("./allInsertion.csv", +value1+"\n")
}

// INSETRION 
function swap (a, i ,b){
    var temp = a[i];
    a[i] = a[b];
    a[b] = temp
}


function insertionSort(list) {
    var swapped 
    do{ swapped =false
    for (var i = 0; i < list.length; i++) {
    for (var j = i; j > 0; j--) {
    if (list[j] < list[j - 1]) {
    swap(list, j, j - 1);
    } else {
        break;
   }
  }
 } 
}while(swapped)
}

// 100
var start = new Date().getTime()
insertionSort(array100)
var end = new Date().getTime()
var time = end - start

writeToFile ("array count 100, Time Taken (ms): " + time);


// 1000
var start = new Date().getTime()
insertionSort(array1000)
var end = new Date().getTime()
var time = end - start
writeToFile ("array count 1000, Time Taken (ms): " + time);


//10000
var start = new Date().getTime()
insertionSort(array10000)
var end = new Date().getTime()
var time = end - start
writeToFile ("array count 10000, Time Taken (ms): " + time);


//100000
var start = new Date().getTime()
insertionSort(array100000)
var end = new Date().getTime()
var time = end - start
writeToFile ("array count 100000, Time Taken (ms): " + time);


// 200000
var start = new Date().getTime()
insertionSort(array200000)
var end = new Date().getTime()
var time = end - start
writeToFile ("array count 200000, Time Taken (ms): " + time);


// 300000
var start = new Date().getTime()
insertionSort(array300000)
var end = new Date().getTime()
var time = end - start
writeToFile ("array count 300000, Time Taken (ms): " + time);


//400000
var start = new Date().getTime()
insertionSort(array400000)
var end = new Date().getTime()
var time = end - start
writeToFile ("array count 400000, Time Taken (ms): " + time);


//500000
var start = new Date().getTime()
insertionSort(array500000)
var end = new Date().getTime()
var time = end - start

writeToFile ("array count 500000, Time Taken (ms): " + time);