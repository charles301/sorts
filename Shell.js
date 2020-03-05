var list = Array.from({length: 100000}, () => Math.floor(Math.random() * 100000));

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
shellSort(list)
var end = new Date().getTime()
var time = end - start
console.log("Shell sort on 1000 takes " + time + " Milliseconds")