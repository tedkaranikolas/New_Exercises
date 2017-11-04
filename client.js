console.log('hello, world');

var testArray = [1, 5, 2, 1, 10];
var above = 0;
var below = 0;

function checkAboveBelow(num){
  for (var i = 0; i <= testArray.length; i ++) {
    if (num > testArray[i])
    {
        above ++;

      } else if
        (num < testArray[i]){

        below ++;
    }
  }
console.log('above: ' + above);
console.log('below: ' + below);
  }

checkAboveBelow(6);
