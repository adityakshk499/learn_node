const { greetFn } = require("./multipleImportExport");
const { greetFn2 } = require("./multipleImportExport");
const multipleImportExportFile = require("./multipleImportExport");
require("./modulevsexports");
console.log(multipleImportExportFile);

// output =  { greetFn: [Function (anonymous)], greetFn2: [Function: greet] }

// the first function is anonymous because it is not having name in memory but it is exporting directly when the file execute

greetFn();
greetFn2();
