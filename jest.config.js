module.exports = {
	// Browser jsdom test
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	testMatch: ['src/**/*.ts(x)'],
	collectCoverageFrom: ['src/**/*.ts(x)?'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
