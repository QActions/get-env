module.exports = {
  verbose: true,
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  preset: "ts-jest",
  testRegex: ".*(\\.test|tests).*\\.(ts|js)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/tests/__helpers__/",
    "/tests/e2e/",
    "/build/",
  ],
  moduleDirectories: ['node_modules', 'src'],
}