const sculptureList = require('./data.js'); // Import data.js

const sculptureListLengths = []; // This will store the result

// Loop through each sculpture in the list
sculptureList.forEach((sculpture) => {
  const lengthObject = {};
  for (const key in sculpture) {
    lengthObject[key] = sculpture[key].length;
  }
  sculptureListLengths.push(lengthObject);
});

// Print the final result
console.log(sculptureListLengths);
