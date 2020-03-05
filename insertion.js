var list = Array.from({length: 100000}, () => Math.floor(Math.random() * 100000));

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


var start = new Date().getTime()
insertionSort(list)
var end = new Date().getTime()
var time = end - start


console.log("Insertion sort on 1000 takes " + time + " Milliseconds")