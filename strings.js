let a ="Extravaganza";
result = a.substring(8,0);
console.log({result});

//2
const food ="The quick fox jumped over the lazy dog";
const insert ="eat"
const food2 =food.substring(0.4) + insert + food.substring(4);
console.log({food2});

//4
const string1 = "The pupils are reading in the library";
console.log({index: string1.indexOf('are')})
const string2 = "The child was sitting on the table before it fell";
console.log({index: string2.indexOf('sitting')})

//5
let Sentence  = "wonderful";
let UpperCaseSentence = Sentence.toUpperCase();
console.log({UpperCaseSentence});

let word = "amazing, UndERneath";
let lowerCaseWord = word.toLowerCase();
console.log({lowerCaseWord});


function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  console.log(titleCase('A wonderful world'));




