/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  trailingComma: 'all',
  tabWidth: 2,
  singleQuote: true,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
