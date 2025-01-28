/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let currentSubString = []

  const separatedSubstrings = []
  for(let i = 0;i<s.length; i++){
    let currentChar = s[i]
    if(!currentSubString.includes(currentChar)){
      currentSubString.push(currentChar)
    }else{
      const newSubString = currentSubString.join("")
      separatedSubstrings.push(newSubString)
      currentSubString = []
      currentSubString.push(currentChar)
    }
    if(i=== s.length - 1){
      const newSubString = currentSubString.join("")
      separatedSubstrings.push(newSubString)
    }
  }  

  
  const longestSubString = separatedSubstrings.reduce((currentLongest, currentString) =>{
    if(currentLongest.length < currentString.length){
      currentLongest = currentString
    }
    return currentLongest
  },'')

  // let longestSubstring = ''
  // for(let i = 0; i < separatedSubstrings.length; i++){
  //   let currentString = separatedSubstrings[i]

  //   if(longestSubString.length < currentString.length){
  //     longestSubString = currentString
  //   }
  // }
  return longestSubString.length
}
console.log(lengthOfLongestSubstring("hello my name is Timothy"))
module.exports = lengthOfLongestSubstring;
