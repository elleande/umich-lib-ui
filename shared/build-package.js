const execSync = require("child_process").execSync;
const path = require("path")

let rollupConfig = `${__dirname}/rollup.config.js`;
let pkgPath = process.env.PWD;
let pkgName = path.basename(pkgPath);
let rootName = 'umich-lib-ui'

execSync(`rollup -c ${rollupConfig} -n ${rootName}-${pkgName}`)