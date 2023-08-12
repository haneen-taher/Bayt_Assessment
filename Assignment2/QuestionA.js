function hasAllUniqueCharacters(str) {
  const charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}

let input = "assessment";

if (hasAllUniqueCharacters(input))
  console.log("The String " + input + " has all unique characters");
else console.log("The String " + input + " has duplicate characters");
