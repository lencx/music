import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
  // see: https://github.com/vitejs/vite/blob/master/src/node/config.ts
  // the key must start and end with a slash
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
    '/@comps/': path.resolve(__dirname, 'src/components'),
    '/@utils/': path.resolve(__dirname, 'src/utils'),
  },
};

export default config;