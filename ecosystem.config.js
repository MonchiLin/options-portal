module.exports = {
	apps: [
		{
			name: '111',
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
