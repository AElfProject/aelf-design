import { readdirSync } from 'fs';
import { join } from 'path';
import { defineConfig } from 'dumi';

// utils must build before core
// runtime must build before renderer-react
// https://imgtp.com/ image OSS
const pkgList = readdirSync(join(__dirname, 'packages')).map((pkg) => {
  return {
    name: require(join(__dirname, 'packages', pkg, 'package.json')).name,
    path: join(__dirname, 'packages', pkg, 'src'),
  };
});
const alias = pkgList.reduce(
  (pre, pkg) => {
    pre[pkg.name] = pkg.path;
    return {
      ...pre,
    };
  },
  {} as Record<string, string>,
);

export default defineConfig({
  title: 'Aelf Design',
  headScripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-C31HWEY1D4',
      async: true,
    },
    `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-C31HWEY1D4');
    `,
  ],
  mfsu: false,
  alias,
  metas: [
    {
      name: 'keywords',
      content: 'web3, AELF, dapp, frontend, components, Aelf Design',
    },
    { name: 'description', content: 'A Components for Web3, Based on Ant Design,' },
    {
      property: 'og:site_name',
      content: 'Aelf Design',
    },
    {
      'data-rh': 'keywords',
      property: 'og:image',
      content: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
    {
      property: 'og:description',
      content:
        'Aelf Design is a React component library based on Ant Design. It provides a series of components that can help you quickly build decentralized applications（DApp）',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: '#1890ff',
    },
    {
      name: 'google-site-verification',
      content: '9LDp--DeEC-xOggsHl_t1MlR_1_2O972JpSUu8NZKMU',
    },
  ],
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'packages/component/src',
      },
    ],
  },
  jsMinifierOptions: {
    target: ['chrome80', 'es2020'],
  },
  define: {
    YOUR_ZAN_API_KEY: 'd0eeefc2a4da4a8ba707889259b437d6',
    YOUR_INFURA_API_KEY: '287294cbc30b44efab9455664b69b130',
    YOUR_WALLET_CONNET_PROJECT_ID: 'c07c0051c2055890eade3556618e38a6',
  },
  publicPath: process.env.PUBLIC_PATH || '/',
  base: process.env.BASE || '/',
  themeConfig: {
    name: 'Aelf Design',
    logo: 'https://ipfs.io/ipfs/QmWtjvb47DU1EQ4MpridFY1ow4214aAWCkhGu3ZF4xvRSY/',
    socialLinks: {
      github: 'https://github.com/AElfProject/aelf-design',
    },
  },
  favicons: ['https://ipfs.io/ipfs/QmWtjvb47DU1EQ4MpridFY1ow4214aAWCkhGu3ZF4xvRSY/'],
  locales: [{ id: 'en-US', name: 'EN' }],
  extraBabelPlugins: [
    [
      'babel-plugin-inline-react-svg-v2',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
            },
          ],
        },
      },
    ],
  ],
});
