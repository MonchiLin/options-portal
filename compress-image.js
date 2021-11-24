import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import path, { dirname } from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COMPRESSED_FOLDER = '__compressed';
const TIMER_NAME = 'compressed';

(async () => {
	console.time(TIMER_NAME);
	const publicPath = path.resolve(__dirname, '.output', 'public');
	const compressedFolderRegExp = new RegExp(COMPRESSED_FOLDER);
	const publicPathRegExp = new RegExp(publicPath);
	const folders = getAllDirectories(publicPath).filter(
		(directoryName) => !directoryName.match(compressedFolderRegExp)
	);

	await Promise.all(
		folders.map(async (folderPath) => {
			const destination = folderPath.replace(
				publicPathRegExp,
				`${publicPath}/${COMPRESSED_FOLDER}`
			);

			console.log('compressing...', destination);

			return imagemin([`${folderPath}/*.{jpg,png}`], {
				destination,
				plugins: [
					imageminJpegtran(),
					imageminPngquant({
						quality: [0.6, 0.8]
					})
				],
			});
		})
	);

	console.timeEnd(TIMER_NAME);

	process.exit();
})();

function getAllDirectories(filepath) {
	const directoryPaths = fs
		.readdirSync(filepath, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map(({ name }) => `${filepath}/${name}`);
	const childDirectories = directoryPaths.reduce(
		(acc, directoryPath) => acc.concat(getAllDirectories(directoryPath)),
		[]
	);

	return [filepath, ...childDirectories];
}