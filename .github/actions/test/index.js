const core = require("@actions/core");

// const fs = require("fs");

// const f = fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf-8");
// console.log(f);

console.log(process.env.GITHUB_WORKSPACE);
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
