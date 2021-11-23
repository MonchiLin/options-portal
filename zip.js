const AdmZip = require('adm-zip');
const path = require("path")

const zip = new AdmZip();

zip.addLocalFolder(path.join(__dirname, ".output"), '.output')
zip.addLocalFile(path.join(__dirname, "ecosystem.config.js"))
zip.addLocalFile(path.join(__dirname, ".nvmrc"))
zip.addLocalFile(path.join(__dirname, "README.md"))

zip.writeZip(path.join(__dirname, "files.zip"));
