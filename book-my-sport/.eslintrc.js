module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended"
  ],
  plugins: ["react", "import", "jsx-a11y", "jest"],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    'indent': ['error', 2],
    'space-before-function-paren': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'import/order': ['error', { 'alphabetize': { 'order': 'asc' } }],
  },
  settings: {
    react: {
      version: 'detect', 
    },
  },
};
