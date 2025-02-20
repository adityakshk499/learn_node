// To get the filename use this

console.log(__filename);

// It will give you the whole path of the file

const path = require("path");

console.log(path.basename(__filename));

// To get the directory name use this

console.log(__dirname);

// It will give you the path of the directory where the file is located.

// to get the directory name use this

console.log(path.basename(__dirname));

// It will give you the name of the directory where the file is located.

// you can also check the extension

console.log(path.extname(path.basename(__filename)));
