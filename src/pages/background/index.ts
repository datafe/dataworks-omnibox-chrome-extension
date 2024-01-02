import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

const selfExtensionId = chrome?.runtime?.id;
const links = [
  {
    keywords: [chrome.i18n.getMessage('inner'), 'inner', '弹内'],
    display: chrome.i18n.getMessage('inner'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://datastudio.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataService')]: 'https://dataservice.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://sqlx.alibaba-inc.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('di')]: 'https://di.dw.alibaba-inc.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('innerPre'), 'innerpre', '弹内预发'],
    display: chrome.i18n.getMessage('innerPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://pre-datastudio.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://pre-dmc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataService')]: 'https://pre-dataservice.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://pre-sqlx.alibaba-inc.com',
      [chrome.i18n.getMessage('dgc')]: 'https://pre-dgc.alibaba-inc.com',
      [chrome.i18n.getMessage('di')]: 'https://pre-di.alibaba-inc.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('innerPreLocal'), 'innerprelocal', 'local', '弹内预发本地', '本地'],
    display: chrome.i18n.getMessage('innerPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-dataservice.alibaba-inc.com:8030/',
      [chrome.i18n.getMessage('dgc')]: 'https://local.pre-dgc.dw.alibaba-inc.com:8002/',
      [chrome.i18n.getMessage('tag')]: 'https://local.pre-dgc.dw.alibaba-inc.com:8000/tag',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghai'), 'shanghai', 'shang', '上海'],
    display: chrome.i18n.getMessage('shanghai'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-shanghai.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiPre'), 'shanghaipre', 'shangpre', '上海预发'],
    display: chrome.i18n.getMessage('shanghaiPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://pre-ide2-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://pre-dmc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://pre-da-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://pre-dgc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://pre-di-cn-shanghai.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiPreLocal'), 'shanghaiprelocal', 'shangprelocal', '上海预发本地'],
    display: chrome.i18n.getMessage('shanghaiPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-shanghai.data.aliyun.com:8030/',
      [chrome.i18n.getMessage('dgc')]: 'https://local.pre-dgc-cn-shanghai.data.aliyun.com:8002/',
      [chrome.i18n.getMessage('tag')]: 'https://local.pre-dgc-cn-shanghai.data.aliyun.com:8000/tag',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiLocal'), 'shanghailocal', 'shanglocal', '上海本地'],
    display: chrome.i18n.getMessage('shanghaiLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.prod-ds-cn-shanghai.data.aliyun.com:8030/',
      [chrome.i18n.getMessage('dgc')]: 'https://local.prod-dgc-cn-shanghai.data.aliyun.com:8002/',
      [chrome.i18n.getMessage('tag')]: 'https://local.prod-dgc-cn-shanghai.data.aliyun.com:8000/tag',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hangzhou'), 'hangzhou', 'hang', '杭州'],
    display: chrome.i18n.getMessage('hangzhou'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-hangzhou.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hangzhouPre'), 'hangzhoupre', 'hangpre', '杭州预发'],
    display: chrome.i18n.getMessage('hangzhouPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-vpc-cn-hangzhou.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hangzhouPreLocal'), 'hangzhouprelocal', 'hangprelocal', '杭州预发本地'],
    display: chrome.i18n.getMessage('hangzhouPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-hangzhou.data.aliyun.com:8030/',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shenzhen'), 'shenzhen', 'shen', '深圳'],
    display: chrome.i18n.getMessage('shenzhen'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-shenzhen.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijing'), 'beijing', 'bei', '北京'],
    display: chrome.i18n.getMessage('beijing'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-beijing.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingPre'), 'beijingpre', 'beipre', '北京预发'],
    display: chrome.i18n.getMessage('beijingPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-vpc-cn-beijing.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingPreLocal'), 'beijingprelocal', 'beiprelocal', '北京预发本地'],
    display: chrome.i18n.getMessage('beijingPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-beijing.data.aliyun.com:8030/',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('chengdu'), 'chengdu', 'cheng', '成都'],
    display: chrome.i18n.getMessage('chengdu'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-chengdu.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('zhangjiakou'), 'zhangjiakou', 'zhang', '张家口'],
    display: chrome.i18n.getMessage('zhangjiakou'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-zhangjiakou.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('wulanchabu'), 'wulanchabu', 'wulan', '乌兰察布'],
    display: chrome.i18n.getMessage('wulanchabu'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-wulanchabu.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-wulanchabu.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-wulanchabu.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-wulanchabu.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hongkong'), 'hongkong', 'hong', '香港'],
    display: chrome.i18n.getMessage('hongkong'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-hongkong.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('singapore'), 'singapore', 'sin', 'ap-southeast-1', '新加坡'],
    display: chrome.i18n.getMessage('singapore'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-southeast-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('sydney'), 'sydney', 'syn', 'ap-southeast-2', '悉尼'],
    display: chrome.i18n.getMessage('sydney'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-southeast-2.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('kualaLumpur'), 'kualaLumpur', 'kuala', 'ap-southeast-3', '吉隆坡'],
    display: chrome.i18n.getMessage('kualaLumpur'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-southeast-3.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('jakarta'), 'jakarta', 'ap-southeast-5', '雅加达'],
    display: chrome.i18n.getMessage('jakarta'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-southeast-5.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('mumbai'), 'mumbai', 'ap-south-1', '孟买'],
    display: chrome.i18n.getMessage('jakarta'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-south-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('tokyo'), 'tokyo', 'ap-northeast-1', '东京'],
    display: chrome.i18n.getMessage('tokyo'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-ap-northeast-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('siliconValley'), 'silicon', 'us-west-1', '美西', '硅谷'],
    display: chrome.i18n.getMessage('siliconValley'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-us-west-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('virginia'), 'virginia', 'us-east-1', '美东', '弗吉尼亚'],
    display: chrome.i18n.getMessage('virginia'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-us-east-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('frankfurt'), 'frankfurt', 'eu-central-1', '德国', '法兰克福'],
    display: chrome.i18n.getMessage('frankfurt'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-eu-central-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('london'), 'london', 'eu-west-1', '英国', '伦敦'],
    display: chrome.i18n.getMessage('singapore'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-eu-west-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiFinance'), 'shanghaifinance', 'shanghaifin', 'cn-shanghai-finance-1', '上海金融云', '上海金'],
    display: chrome.i18n.getMessage('shanghaiFinance'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-shanghai-finance-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shenzhenFinance'), 'shenzhenfinance', 'shenzhenfin', 'cn-shenzhen-finance-1', '深圳金融云', '深圳金'],
    display: chrome.i18n.getMessage('shenzhenFinance'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-shenzhen-finance-1.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingGov'), 'beijinggov', '北京政务云', '北京政', 'cn-north-2-gov-1'],
    display: chrome.i18n.getMessage('beijingGov'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dgc')]: 'https://dgc-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('di')]: 'https://di-cn-north-2-gov-1.data.aliyun.com',
    },
  },
]

const products = [
  { keywords: [chrome.i18n.getMessage('dataStudio'), 'ide', 'studio', '开发'], content: chrome.i18n.getMessage('dataStudio'), description: chrome.i18n.getMessage('dataStudio') },
  { keywords: [chrome.i18n.getMessage('dataMap'), 'dmc', 'map', '地图'], content: chrome.i18n.getMessage('dataMap'), description: chrome.i18n.getMessage('dataMap') },
  { keywords: [chrome.i18n.getMessage('dataService'), 'ds', 'service', '服务'], content: chrome.i18n.getMessage('dataService'), description: chrome.i18n.getMessage('dataService') },
  { keywords: [chrome.i18n.getMessage('dataAnalytics'), 'da', 'sqlx', 'analyze', 'analytics', '分析'], content: chrome.i18n.getMessage('dataAnalytics'), description: chrome.i18n.getMessage('dataAnalytics') },
  { keywords: [chrome.i18n.getMessage('dgc'), 'dgc', '治理'], content: chrome.i18n.getMessage('dgc'), description: chrome.i18n.getMessage('dgc') },
  { keywords: [chrome.i18n.getMessage('tag'), 'tag', '标签'], content: chrome.i18n.getMessage('tag'), description: chrome.i18n.getMessage('tag') },
  { keywords: [chrome.i18n.getMessage('di'), 'integrate', '集成'], content: chrome.i18n.getMessage('di'), description: chrome.i18n.getMessage('di') },
];

chrome.omnibox.setDefaultSuggestion({
  description: chrome.i18n.getMessage('console'),
});

// default suggestion
chrome.omnibox.onInputStarted.addListener(function () {
});

chrome.omnibox.onInputChanged.addListener(function (text, suggest) {

  // parse region
  const regionResult = links.filter(item => {
    return item?.keywords?.findIndex?.(keyword => {
      if (text?.includes?.(keyword) || text === keyword) return true;
      else if (keyword?.startsWith?.(text)) return true;
    }) !== -1;
  }) || [];

  // parse product
  const productResult = products.filter(item => {
    return item?.keywords?.findIndex?.(keyword => {
      if (text?.includes?.(keyword) || text === keyword) return true;
      else if (keyword?.startsWith?.(text)) return true;
    }) !== -1;
  }) || [];

  const set = new Set<{ content: string; description: string; deletable?: boolean }>();

  const calMatch = (str: string, keyword: string) => {
    if (!keyword) return str;
    let _keyword = keyword?.trim?.();
    return str?.replaceAll ? str?.replaceAll?.(_keyword, `<match><dim>${_keyword}</dim></match>`) : str;
  }

  regionResult.forEach(region => {

    let restText = text?.trim?.();
    region?.keywords?.forEach?.(keyword => {
      restText = restText?.replace?.(keyword, '')?.trim?.();
    });

    products.forEach(product => {
      if (!region?.urlMap?.[product.content]) return;
      const description = `${region.display} ${product.description} <url>${region.urlMap?.[product.content]}</url>`;
      if (restText) {
        if (product?.keywords?.includes?.(restText)) {
          set.add({ content: `${region.display} ${product.content}`, description: calMatch(description, text) });
        }
      } else {
        set.add({ content: `${region.display} ${product.content}`, description: calMatch(description, text) });
      }
    });
  });

  productResult.forEach(product => {
    links.forEach(region => {
      if (!region?.urlMap?.[product.content]) return;
      const description = `${region.display} ${product.description} <url>${region.urlMap?.[product.content]}</url>`;
      set.add({ content: `${region.display} ${product.content}`, description: calMatch(description, text) });
    });
  });

  const result: chrome.omnibox.SuggestResult[] = Array.from(set) || [];
  suggest(result);
});

chrome.omnibox.onInputEntered.addListener(function (text, disposition) {

  let link;
  links.findIndex(region => {
    return products?.findIndex?.(product => {
      if (text === `${region.display} ${product.content}`) {
        link = region.urlMap[product.content];
        return true;
      }
    }) !== -1;
  });

  if (link) chrome?.tabs?.create?.({ url: link });
  else chrome?.tabs?.create?.({ url: 'https://dataworks.console.aliyun.com/' }); // default 至管控台

});

chrome.omnibox.onInputCancelled.addListener(function () {

});

chrome.omnibox.onDeleteSuggestion.addListener(function (text) {

});



