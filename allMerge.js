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
    fs.appendFileSync("./allmerge.csv", +value1+ "in ms" +"\n")
}
function mergeSort(list) {
    if (list.length === 1) {
        return list;
    }
    var listA = mergeSort(list.slice(0, list.length / 2));
    var listB = mergeSort(list.slice(list.length / 2));
    var i = 0;
    var j = 0;
    var newList = [];
    while (i < listA.length || j < listB.length) {
        if (i !== listA.length && (listA[i] < listB[j] || j === listB.length)) {
            newList.push(listA[i]);
            i++;
        } else {
            newList.push(listB[j]);
            j++;
        }
    }
        return newList;
    }
    



    var start = new Date().getTime()
    mergeSort(array100);
    var end = new Date().getTime()
    var time = end - start
    writeToFile (time);

    var start = new Date().getTime()
    mergeSort(array1000);
    var end = new Date().getTime()
    var time = end - start
    writeToFile (time);
    
    var start = new Date().getTime()
    mergeSort(array10000);
    var end = new Date().getTime()
    var time = end - start
    writeToFile (time);
    
    var start = new Date().getTime()
    mergeSort(array100000);
    var end = new Date().getTime()
    var time = end - start
    writeToFile (time);
    
    var start = new Date().getTime()
    mergeSort(array200000);
    var end = new Date().getTime()
    var time = end - start
    writeToFile (time);
    
    var start = new Date().getTime()
    mergeSort(array300000);
    var end = new Date().getTime()
    var time = end - start
    writeToFile (time);
    
    var start = new Date().getTime()
    mergeSort(array400000);
    var end = new Date().getTime()
    var time = end - start
    writeToFile (time);
    
    var start = new Date().getTime()
    mergeSort(array500000);
    var end = new Date().getTime()
    var time = end - start
    writeToFile (time);