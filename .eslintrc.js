/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    'arrow-parens': ['warn', 'as-needed'],
    'no-unused-vars': ['off'],
    'no-console': ['off'],
    'consistent-return': ['warn'],
    'max-len': ['off'],
    'semi': ['error', 'never'],
    'import/prefer-default-export': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/prop-types': ['off'],
    'no-underscore-dangle': ['off'],
    'camelcase': ['off'],
    'react/destructuring-assignment': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
}
