

function fib() {
  returnList = [0, 1];
  for( i = 2; i< 100; i++) {
    let next = (returnList[i-2] + returnList[i-1]);
    returnList.push(next);
  }
return returnList;
}
console.log(fib());


function numsToStrings(nums) {

  return _.map(nums, entry => `${entry}`);
}

console.log(numsToStrings(fib()));


function numEvenNums(nums) {
  return _.filter(nums, num => ((num % 2) === 0)).length;
}

console.log(numEvenNums(fib()));