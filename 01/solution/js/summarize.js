'use strict';

const summarize = (...numbers) => {
   const nums = [...numbers].filter(number => Number.isInteger(number));
   let numArr;
        
   if (nums.some((number) => !Number.isSafeInteger(number))) {
      numArr = nums.map((number) => BigInt(number));
   } else {
      numArr = nums.map((number) => Number(number));
   }

   const sum = numArr.reduce((acc, cur) => (acc += cur));
   return Number.isSafeInteger(sum) ? sum : BigInt(sum);

}





export default summarize;
