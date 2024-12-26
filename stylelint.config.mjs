export default {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'layer',
          'responsive',
          'screen',
          'tailwind',
          'theme',
          'utility',
          'variants',
        ],
      },
    ],
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'import-notation': null,
  },
};
