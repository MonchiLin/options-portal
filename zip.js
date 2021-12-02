import AdmZip from 'adm-zip';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const zip = new AdmZip();

console.log("开始打包")

zip.addLocalFolder(path.join(__dirname, ".output"), '.output')
zip.addLocalFile(path.join(__dirname, "ecosystem.config.js"))
zip.addLocalFile(path.join(__dirname, "README.md"))

zip.writeZip(path.join(__dirname, "files.zip"));

console.log("打包完成", __dirname)
