// There are two types of objects module and exports module.exports is the main one while as exports is just the reference of module.exports you can see the given example with the help of debugging tools or console.log

console.log(exports);
console.log(module.exports);

// At this stage both are empty

// now add some thing in module.exports

module.exports.a = "a";
module.exports.b = "b";

console.log(exports);
console.log(module.exports);

// Here in above you can see i add in module.exports but it exports is taking the reference of module.exports

// now add in exports only

exports.a = "5";

console.log(exports);
console.log(module.exports);

// output = { a: '5', b: 'b' }
// { a: '5', b: 'b' }

// here you can see module.exports is taking the refference of exports

a = 6;

exports = a;
console.log(exports);
console.log(module.exports);

// here in this example the reference is broke export is having different value while module.exports is having different one
