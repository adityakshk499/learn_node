# Node.js vs Browser JavaScript

## 📌 Node.js

1. ❌ No DOM
2. ❌ No `window` object
3. ✅ Uses **CommonJS** modules (`require`, `module.exports`)
4. ✅ Provides different versions (`process.version`)

## 🌐 Browser JavaScript

1. ✅ Has **DOM**
2. ✅ Uses `window` object
3. ✅ Uses **ES6 Modules** (`import`, `export`)
4. ✅ Supports **Fragments** (HTML elements grouping without extra nodes)

---

## 🌀 REPL (Read-Eval-Print Loop)

REPL allows you to execute JavaScript code interactively.
Just enter `node` in the terminal and start coding! 🚀

```sh
$ node
> console.log("Hello, Node.js!")
Hello, Node.js!
```

---

## 🌍 Global Objects in Node.js

Unlike the browser, Node.js **does not** have `window` or `document`. But it does have global objects:

- `__dirname` → Path to the current directory 📂
- `__filename` → Name of the current file 📄
- `require` → Function to **import modules**
- `module` → Information about the current module
- `process` → Info about the **execution environment**

Example:

```js
console.log(__dirname); // Outputs the directory path
console.log(__filename); // Outputs the file path
```

---

## 📦 Modules in Node.js

Node.js uses modules to **encapsulate** code and share only what’s needed.

### Exporting Data (Three Ways)

1️⃣ **Named Exports**:

```js
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

2️⃣ **Default Exports**:

```js
// greet.js
module.exports = function (name) {
  return `Hello, ${name}!`;
};
```

3️⃣ **Module Object**:

```js
// app.js
const math = require("./math");
console.log(math.add(5, 3)); // 8

const greet = require("./greet");
console.log(greet("Aditya")); // Hello, Aditya!
```

---

## 🎯 Summary

✅ Node.js is a **runtime** with no DOM or `window`.
✅ It supports **CommonJS** modules.
✅ Global objects like `__dirname`, `__filename`, and `process` exist.
✅ Modules help in **code reusability** and **encapsulation**.

🛠 Now you're ready to build awesome projects with Node.js! 🚀
