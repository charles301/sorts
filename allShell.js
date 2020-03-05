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
    fs.appendFileSync("./allShell.csv", +value1+ " in ms" + "\n")
}

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

var start = new Date().getTime()
shellSort(array100)
var end = new Date().getTime()
var time = end - start
writeToFile(time )

var start = new Date().getTime()
shellSort(array1000)
var end = new Date().getTime()
var time = end - start
writeToFile(time )

var start = new Date().getTime()
shellSort(array10000)
var end = new Date().getTime()
var time = end - start
writeToFile(time )

var start = new Date().getTime()
shellSort(array100000)
var end = new Date().getTime()
var time = end - start
writeToFile(time )

var start = new Date().getTime()
shellSort(array200000)
var end = new Date().getTime()
var time = end - start
writeToFile( time )

var start = new Date().getTime()
shellSort(array300000)
var end = new Date().getTime()
var time = end - start
writeToFile(time)

var start = new Date().getTime()
shellSort(array400000)
var end = new Date().getTime()
var time = end - start
writeToFile( time )


var start = new Date().getTime()
shellSort(array500000)
var end = new Date().getTime()
var time = end - start
writeToFile(time )
