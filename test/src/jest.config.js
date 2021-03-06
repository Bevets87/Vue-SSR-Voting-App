module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
    ".+\\.vue$": "<rootDir>/node_modules/vue-jest"
  },
  rootDir: "../../",
  testEnvironment: "jsdom"
};
