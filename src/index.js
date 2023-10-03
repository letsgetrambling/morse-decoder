const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrTen = [];

for ( let i = 0; i < expr.length; i = i + 10) {
  let ten = expr.slice(i, i + 10);
arrTen.push(ten);
}

let arrWZ = [];
for ( let i = 0; i < arrTen.length; i++) {
if (arrTen[i] === '**********' ) {
  arrWZ.push(' ');
} else {
  for ( let j = 0; j < arrTen[i].length; j = j + 2) {
    if ( arrTen[i][j] !== '0') {
      arrWZ.push(arrTen[i].slice(j));
      break;
    } 
  }
}
}


let arrDotDash = [];

for ( let i = 0; i < arrWZ.length; i++) {
  let stringI = [];
  for ( let j = 0; j < arrWZ[i].length; j = j + 2) {
  if (arrWZ[i].slice(j, j + 2) === '11') {
    stringI = stringI + '-';
  } else if (arrWZ[i].slice(j, j + 2) === '10') {
    stringI = stringI + '.';
  } else stringI = stringI + arrWZ[i];
}
arrDotDash.push(stringI);
}  

let finalString = '';

for ( let i = 0; i < arrDotDash.length; i++) {
  if (arrDotDash[i] === ' ') {
    finalString = finalString + ' ';
  }
   else {
   } for ( let key in MORSE_TABLE) {
if ( arrDotDash[i] === key) {
finalString = finalString + MORSE_TABLE[key];
} 
  }
}
return finalString;
}

module.exports = {
    decode
}