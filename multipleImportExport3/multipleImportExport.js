// the first type of import you can do is by not making any variable to store any type of datatype but  module.exports.variableName

module.exports.greetFn = () => {
  console.log("Hello");
};

// the second type is you can make variable and then export it

const greet = () => {
  console.log("Hello2");
};

module.exports.greetFn2 = greet;
