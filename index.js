const path = require("path");
const fs = require("fs");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const { argv } = yargs(hideBin(process.argv));
console.log(argv);

const packageStr = fs.readFileSync(path.resolve(__dirname, "package.json"), {
  encoding: "utf-8",
});
const package = JSON.parse(packageStr);

if (argv.name) {
  console.log(package.name);
} else {
  console.log("nameオプションがありません");
}
