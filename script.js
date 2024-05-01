// let str = 'Behruz'

// for(let index = 0;index <str.length;index++){
// console.log(str[index]);
// }








let berilganArray = [2, 4, 9, 10, 45, 67, 8, 90];
let juftSonlar = [];
console.log(berilganArray);

for (let i = 0; i < berilganArray.length; i++) {
  if (berilganArray[i] % 2 === 0) {
    juftSonlar.push(berilganArray[i]);
  }
}

console.log(juftSonlar);