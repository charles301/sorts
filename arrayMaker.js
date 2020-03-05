var fs = require("fs")
function writeToFile(value1){
    fs.appendFileSync("./array500000.csv", value1)
}
let i = Array.from({length: 500000}, () => Math.floor(Math.random() * 1000));
console.log(i)


writeToFile (i);