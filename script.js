'use strict';
/*
const jonas = {
    firstName : 'Jonas',
    lastName : 'Brother',
    birthYeah : 1982,
    job: 'teacher',
    calcAge : function(){
        return 2037- this.birthYeah;
    },
    hasDrivingLicense: true,
    summary: function (){        
    return `${this.firstName} is a ${this.calcAge()} years old and has ${this.hasDrivingLicense?'a':'no'} driving License.`;
    },
};

console.log(jonas.summary());

const str = jonas.hasDrivingLicense ? 'a':'no';

console.log(jonas.calcAge());

console.log(`Jonas is ${jonas.calcAge()} years old and has ${str} driving license.`);



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr);
let sum = arr[0];
console.log(arr.length);
function avg(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    sum = sum + arr[i];
    console.log(sum);
  }

  return sum / arr.length;
}

console.log(avg(arr));
*/

const num = '23';

const calcAge = birthyeah => 2037 - birthyeah;

console.log(calcAge(1992));
