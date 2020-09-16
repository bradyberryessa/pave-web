module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    '__dirname': true,
    'module': true,
    'require': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/jsx-sort-props': [2, {
      'callbacksLast': true,
      'shorthandFirst': true,
      'shorthandLast': false,
      'ignoreCase': true,
      'noSortAlphabetically': false,
      'reservedFirst': true
    }],
    'no-console': 1,
    'react/no-find-dom-node': 1,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'standard/no-callback-literal': 0,
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  },
  'settings': {
    'react': {
      'pragma': 'React',  // Pragma to use, default to 'React'
      // 'fragment': 'React.Fragment',  // Fragment to use, default to 'React.Fragment'
      'version': 'detect', 
    }
  }
}
