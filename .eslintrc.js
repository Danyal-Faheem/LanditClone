module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
      },
    ],
  },
};
