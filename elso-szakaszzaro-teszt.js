// 1.
// Primitív adattípusok:
// karakterlánc (string)
const a = 'macska';

// number
const b = 5;

// logikai érték
const c = true;

// Összetett adattípusok:

// tömb
const d = [1, 2, 3];

// matrix
const e = [[1, 2, 3], [4, 5, 6]];

// object
const f = {
  name: 'Misi',
  age: 30
};

// 2.
// A primitív típusok érték szerint adódnak át, tehát egy függvényben történő módosítások nem érintik az eredeti változó értékét.
// Például:
// let a = 5;
// let b = a;
// a = 3;
// ebben az esetben a b értéke ugyanúgy 5 marad.

/* A összetett adattípusok referencia szerint adódnak át, tehát ha egy tömb-öt egyenlővé teszünk egy másik tömbbel például, akkor
akármelyik nevű tömböt módosítjuk, ugyanaz változik, hiszen a két tömb egyenlővé tételével azt mondtuk meg, hogy mind a két változó
ugyanarra a memóriacímre mutasson.
például:
let a = [1,2,3];
let b = a;
a = [1,2];
ebben az esetben a "b" változó értéke is [1,2] lesz.
*/

// 3.

const sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sum(d));

// 4.
const countElement = (array, number) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) counter++;
  }
  return counter;
};
console.log(countElement([1, 2, 3, 2, 2, 5], 2));

// 5.
const switchStatementUser = (number) => {
  switch (number) {
    case 1: {
      console.log('egy');
      break;
    }
    case 2: {
      console.log('ketto');
      break;
    }
    default: console.log('Nem egy es nem ketto.');
  }
}
;
switchStatementUser(3);

// 6. (metszet)
const segment = (array1, array2) => {
  const helperArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        helperArray.push(array1[i]);
      }
    }
  }
  return helperArray;
};

console.log(segment([1, 2, 3, 5], [1, 2, 3, 4, 7]));

// 8.
const readlineSync = require('readline-sync');
const firstNumber = readlineSync.question('First number: ');
const secondNumber = readlineSync.question('Second number: ');
const matrix = [];

let firstElement = 1;
for (let i = 0; i < firstNumber; i++) {
  matrix[i] = [];
  for (let j = 0; j < secondNumber; j++) {
    matrix[i].push(firstElement);
    firstElement *= 2;
  }
}

console.log(matrix);
