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
    fs.appendFileSync("./allSelection.csv", +value1+" in ms" +"\n")
}

function swap (a, i ,min){
    var temp = a[i];
    a[i] = a[i+1];
    a[i+1] = temp;
}

function selectionSort(list) {
    var swapped;
    do{
        swapped = false
    for (var i = 0; i < list.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < list.length; j++) {
    if (list[j] < list[min]) {
    min = j;
    swapped = true}
    }
    if (min !== i) {
    swap(list, i, min);
    }
    }
    } while (swapped)
}


var start = new Date().getTime()
    selectionSort(array100)
var end = new Date().getTime()
var time = end - start
writeToFile (time);

var start = new Date().getTime()
    selectionSort(array1000)
var end = new Date().getTime()
var time = end - start
writeToFile (time);

var start = new Date().getTime()
    selectionSort(array10000)
var end = new Date().getTime()
var time = end - start
writeToFile (time);

var start = new Date().getTime()
    selectionSort(array100000)
var end = new Date().getTime()
var time = end - start
writeToFile (time);

var start = new Date().getTime()
    selectionSort(array200000)
var end = new Date().getTime()
var time = end - start
writeToFile (time);

var start = new Date().getTime()
    selectionSort(array300000)
var end = new Date().getTime()
var time = end - start
writeToFile (time);

var start = new Date().getTime()
    selectionSort(array400000)
var end = new Date().getTime()
var time = end - start
writeToFile (time);

var start = new Date().getTime()
    selectionSort(array500000)
var end = new Date().getTime()
var time = end - start
writeToFile (time);
