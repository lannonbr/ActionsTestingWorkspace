const core = require("@actions/core");

console.log(__dirname);
console.log(core.getInput("filepath"));

// const cssPath = path.resolve(
//   __dirname,
//   "..",
//   "..",
//   "..",
//   "public",
//   "style.css"
// );

// if (!fs.existsSync(cssPath)) {
//   console.error("public/styles.css does not exist. Try running 'yarn build'");
//   process.exit(1);
// }

// const css = fs.readFileSync(cssPath, "utf-8");

// console.log(css);