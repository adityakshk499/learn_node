// FS module is the core module of Node.js. It provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

// In this snippet, we are using the fs module to interact with the file system. We are using the fs module to read the contents of a file and then write the contents to another file.

// The fs module provides a number of functions for interacting with the file system. Some of the most commonly used functions include
// fs.readFile(),
//  fs.writeFile(),
//  fs.appendFile(),
//  fs.unlink(),
//  fs.rename(),
//  fs.readdir(),
//  fs.mkdir(),
//  fs.rmdir(),
//  fs.stat(),

// and many more

// The fs module is having both sync and async function  for example fs.readFile() and fs.readFileSync(). The async functions take a callback function as an argument, which is called when the operation is completed. The sync functions block the execution of the program until the operation is completed.

const fs = require("fs");
const { text } = require("stream/consumers");

// writefile has 3 arguments filename , data , callback function

// Async one

fs.writeFile("test.txt", "Hello world", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File has been written");
});

// sync one

fs.writeFileSync("test1.txt", "Hello world");

// readfile has 3 arguments filename , encoding , callback function

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// sync one the function returns the data store it into a varibale and then print it

const data = fs.readFileSync("test1.txt", "utf-8");
console.log(data);

// The fs.unlink() function is used to delete a file. It takes the filename as an argument and a callback function that is called when the file is deleted.

fs.unlink("test.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File has been deleted");
});

// The fs.rename() function is used to rename a file. It takes the old filename, the new filename, and a callback function as arguments.

fs.rename("test2.txt", "test1.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File has been renamed");
});

// The fs.readdir() function is used to read the contents of a directory. It takes the directory name and a callback function as arguments.

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});

// simmilarly you can do for sync one

fs.mkdir("newfolder", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory has been created");
});

fs.rmdir("newfolder", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory has been deleted");
});

fs.stat("test1.txt", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats);
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.size);
  console.log(stats.birthtime);
  console.log(stats.mtime);
  console.log(stats.atime);
  console.log(stats.ctime);
});
