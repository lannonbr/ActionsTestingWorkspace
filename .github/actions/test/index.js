const core = require("@actions/core");

const fs = require("fs");
const path = require("path");

console.log(process.env.GITHUB_WORKSPACE);
const filePath = core.getInput("filepath");

const cssPath = path.resolve(process.env.GITHUB_WORKSPACE, filePath);

if (!fs.existsSync(cssPath)) {
  console.error(`file does not exist at: ${cssPath}`);
  process.exit(1);
}

const css = fs.readFileSync(cssPath, "utf-8");

console.log(css);
