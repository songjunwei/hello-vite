module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  moduleNameMapper: {
      "^@(.*)$": "<rootDir>/src/$1"
  }
};
