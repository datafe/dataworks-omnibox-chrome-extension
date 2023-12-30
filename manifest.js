import packageJson from './package.json' assert { type: 'json' };

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  name: '__MSG_appName__',
  version: packageJson.version,
  description: '__MSG_appDescription__',
  omnibox: { 'keyword': 'dw' },
  permissions: [],
  // options_page: 'src/pages/options/index.html',
  default_locale: "zh_CN",
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  icons: {
    128: 'logo-128.png',
    64: 'logo-64.png',
    32: 'logo-32.png',
    16: 'logo-16.png'
  },
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'icon-128.png', 'icon-32.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;
