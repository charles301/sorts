var fs = require("fs")
function writeToFile(value1, value2){
    fs.appendFileSync("./selection.csv", value1+","+value2+"\n")
}

const {array100} = require('./array100.js') 
let arraySize = 100
/*
var list = Array.from({length: arraySize}, () => Math.floor(Math.random() * 100000));
*/
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
console.log("Selection sort on " + arraySize +" takes " + time + " Milliseconds")
writeToFile ("array count: " + arraySize, "Time Taken (ms): " + time);