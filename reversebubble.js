let array = []

for (i = 5000; i > 0; i--) {
    array.push(i)}

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

bubbleSort(array);
var end = new Date().getTime()
var time = end - start
console.log("Bubble sort on 5000 takes " + time + " Milliseconds")