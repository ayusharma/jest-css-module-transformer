module.exports = {
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
        '^.+\\.(css|scss)$': '<rootDir>/src/index.js',
    },
};
