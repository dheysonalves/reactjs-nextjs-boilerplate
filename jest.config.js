module.exports = {
	// Browser jsdom test
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	colectCoverageFrom: ['src/**/*.ts(x)'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
