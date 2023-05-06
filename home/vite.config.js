import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  base: '',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
};