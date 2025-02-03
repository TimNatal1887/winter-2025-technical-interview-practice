/* Remove Duplicates from an Array: Write a function called removeDuplicates that takes an array of numbers as input and returns an new array with all the duplicates removed. */
// // Examples:
// // removeDuplicates([1, 2, 3, 3, 4, 5]); // => [1, 2, 3, 4, 5]
// // removeDuplicates([1, 1, 1, 1, 1, 1]); // => [1]
// // removeDuplicates([1, 2, 3, 4, 5]); // => [1, 2, 3, 4, 5]
module.exports = function removeDuplicates(arr) {
  // SOLUTION 1:
    // const arrayWithoutDuplicates = []
    // for(let i = 0; i < arr.length;i++){
    //   const currentNum = arr[i]
    //   if(!arrayWithoutDuplicates.includes(currentNum)){
    //     arrayWithoutDuplicates.push(currentNum)
    //   }
    // }

    // return arrayWithoutDuplicates


  // SOLUTION 2:
  // return Array.from(new Set(arr)) 

  // SOLUTION 3:
  const arrayWithoutDuplicates = arr.reduce((finalArr, currentNum) =>{
    if(!finalArr.includes(currentNum)){
      finalArr.push(currentNum)
    }

    return finalArr
  },[])

  return arrayWithoutDuplicates

};

