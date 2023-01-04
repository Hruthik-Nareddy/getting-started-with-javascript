/*

The checkEligibility() function should accept age as input and check for eligibility to vote

The validity criteria for age is 18 and above.

The function should return true if eligibility criteria is satisfied else should retun false.

The function should return error message "Invalid Age Input, Age Should Only Be Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function replaceString(inputString, searchString, replaceWith) {

  // Provide Solution Code Here
  if(isNaN(inputString) && isNaN(searchString) && isNaN(replaceWith)){
  var st = inputString.replace(searchString,replaceWith);
  return st;
  }
  else{
    return "Invalid Input Types, All Inputs Should Be of Type String !!"; 
  }

}