//if we are starting at 3 then we start at the next next index value
//so we will try all the elements upto the last index
//use a for loop
//check for values in the array that add upto 8
const nums1 = [3, 2, 5, 4, 1];
function pairSum(numberArray, target) {
  for (let i = 0; i < numberArray.length; i++) {
    // console.log(numberArray[i]);

    for (let j = 0; i < numberArray[j]; i++) {
      if (numberArray[j] + numberArray[i] === 8) {
        console.log(numberArray[j], numberArray[i]);
        let index1 = numberArray.indexOf(numberArray[j]);
        let index2 = numberArray.indexOf(numberArray[i]);
        console.log(index1, index2);
      }
    }
  }
}
//for loop
pairSum(nums1, 8);
