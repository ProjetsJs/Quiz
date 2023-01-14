const http = require('http');
const app = http.createServer(function() {

})

let XLSV =  require('xlsx');
let fold=  XLSV.readFile("quiz.xlsx");
let foldsheet= fold.Sheets[fold.SheetNames[0]];
const fs = require('fs');


const quizq = XLSV.utils.sheet_to_json(fold.Sheets[fold.SheetNames[ 0 ]]);
    console.log(quizq);
    const dbg={} ;
    dbg["questions"]=quizq;

const d =fs.writeFileSync('db.json', JSON.stringify(dbg, null, 2));
