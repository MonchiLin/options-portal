module.exports = {
	apps: [
		{
			name: 'QiQuan',
			exec_mode: 'cluster',
			instances: 'max',
			script: './.output/server/index.mjs',
			env: {
				NODE_ENV: "production",
				PORT: 9999
			}
		}
	]
}
