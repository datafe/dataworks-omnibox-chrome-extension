import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

const selfExtensionId = chrome?.runtime?.id;
const links = [
  {
    keywords: ['inner', '弹内', chrome.i18n.getMessage('inner')],
    display: chrome.i18n.getMessage('inner'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://datastudio.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataService')]: 'https://dataservice.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://sqlx.dw.alibaba-inc.com',
    },
  },
  {
    keywords: ['innerpre', '弹内预发', chrome.i18n.getMessage('innerPre')],
    display: chrome.i18n.getMessage('innerPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://pre-datastudio.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataMap')]: 'https://pre-dmc.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataService')]: 'https://pre-dataservice.dw.alibaba-inc.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://pre-sqlx.dw.alibaba-inc.com',
    },
  },
  {
    keywords: ['innerlocal', 'local', '弹内本地', '本地', chrome.i18n.getMessage('innerLocal')],
    display: chrome.i18n.getMessage('innerLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-dataservice.alibaba-inc.com:8030/',
    },
  },
  {
    keywords: ['shanghai', 'shang', '上海', chrome.i18n.getMessage('shanghai')],
    display: chrome.i18n.getMessage('shanghai'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shanghai.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shanghai.data.aliyun.com',
    },
  },
  {
    keywords: ['shanghaipre', 'shangpre', '上海预发', chrome.i18n.getMessage('shanghaiPre')],
    display: chrome.i18n.getMessage('shanghaiPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://pre-ide2-cn-shanghai.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://pre-dmc-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-cn-shanghai.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://pre-da-cn-shanghai.data.aliyun.com',
    },
  },
  {
    keywords: ['shanghailocal', 'shanglocal', '上海本地', chrome.i18n.getMessage('shanghaiLocal')],
    display: chrome.i18n.getMessage('shanghaiLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-shanghai.data.aliyun.com:8030/',
    },
  },
  {
    keywords: ['hangzhou', 'hang', '杭州', chrome.i18n.getMessage('hangzhou')],
    display: chrome.i18n.getMessage('hangzhou'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-hangzhou.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-hangzhou.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-hangzhou.data.aliyun.com',
    },
  },
  {
    keywords: ['hangzhoupre', 'hangpre', '杭州预发', chrome.i18n.getMessage('hangzhouPre')],
    display: chrome.i18n.getMessage('hangzhouPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-vpc-cn-hangzhou.data.aliyun.com',
    },
  },
  {
    keywords: ['hangzhoulocal', 'hanglocal', '杭州本地', chrome.i18n.getMessage('hangzhouLocal')],
    display: chrome.i18n.getMessage('hangzhouLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-hangzhou.data.aliyun.com:8030/',
    },
  },
  {
    keywords: ['shenzhen', 'shen', '深圳', chrome.i18n.getMessage('shenzhen')],
    display: chrome.i18n.getMessage('shenzhen'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shenzhen.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shenzhen.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shenzhen.data.aliyun.com',
    },
  },
  {
    keywords: ['beijing', 'bei', '北京', chrome.i18n.getMessage('beijing')],
    display: chrome.i18n.getMessage('beijing'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-beijing.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-beijing.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-beijing.data.aliyun.com',
    },
  },
  {
    keywords: ['beijingpre', 'beipre', '北京预发', chrome.i18n.getMessage('beijingPre')],
    display: chrome.i18n.getMessage('beijingPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-vpc-cn-beijing.data.aliyun.com',
    },
  },
  {
    keywords: ['beijinglocal', 'beilocal', '北京本地', chrome.i18n.getMessage('beijingLocal')],
    display: chrome.i18n.getMessage('beijingLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-beijing.data.aliyun.com:8030/',
    },
  },
  {
    keywords: ['chengdu', 'cheng', '成都', chrome.i18n.getMessage('chengdu')],
    display: chrome.i18n.getMessage('chengdu'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-chengdu.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-chengdu.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-chengdu.data.aliyun.com',
    },
  },
  {
    keywords: ['zhangjiakou', 'zhang', '张家口', chrome.i18n.getMessage('zhangjiakou')],
    display: chrome.i18n.getMessage('zhangjiakou'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-zhangjiakou.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-zhangjiakou.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-zhangjiakou.data.aliyun.com',
    },
  },
  {
    keywords: ['hongkong', 'hong', '香港', chrome.i18n.getMessage('hongkong')],
    display: chrome.i18n.getMessage('hongkong'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-hongkong.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-hongkong.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-hongkong.data.aliyun.com',
    },
  },
  {
    keywords: ['singapore', 'sin', 'ap-southeast-1', '新加坡', chrome.i18n.getMessage('singapore')],
    display: chrome.i18n.getMessage('singapore'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-1.data.aliyun.com',
    },
  },
  {
    keywords: ['sydney', 'syn', 'ap-southeast-2', '悉尼', chrome.i18n.getMessage('sydney')],
    display: chrome.i18n.getMessage('sydney'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-2.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-2.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-2.data.aliyun.com',
    },
  },
  {
    keywords: ['kualaLumpur', 'kuala', 'ap-southeast-3', '吉隆坡', chrome.i18n.getMessage('kualaLumpur')],
    display: chrome.i18n.getMessage('kualaLumpur'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-3.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-3.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-3.data.aliyun.com',
    },
  },
  {
    keywords: ['jakarta', 'ap-southeast-5', '雅加达', chrome.i18n.getMessage('jakarta')],
    display: chrome.i18n.getMessage('jakarta'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-southeast-5.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-southeast-5.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-southeast-5.data.aliyun.com',
    },
  },
  {
    keywords: ['mumbai', 'ap-south-1', '孟买', chrome.i18n.getMessage('mumbai')],
    display: chrome.i18n.getMessage('jakarta'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-south-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-south-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-south-1.data.aliyun.com',
    },
  },
  {
    keywords: ['tokyo', 'ap-northeast-1', '东京', chrome.i18n.getMessage('tokyo')],
    display: chrome.i18n.getMessage('tokyo'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-ap-northeast-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-ap-northeast-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-ap-northeast-1.data.aliyun.com',
    },
  },
  {
    keywords: ['silicon', 'us-west-1', '美西', '硅谷', chrome.i18n.getMessage('siliconValley')],
    display: chrome.i18n.getMessage('siliconValley'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-us-west-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-us-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-us-west-1.data.aliyun.com',
    },
  },
  {
    keywords: ['virginia', 'us-east-1', '美东', '弗吉尼亚', chrome.i18n.getMessage('virginia')],
    display: chrome.i18n.getMessage('virginia'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-us-east-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-us-east-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-us-east-1.data.aliyun.com',
    },
  },
  {
    keywords: ['frankfurt', 'eu-central-1', '德国', '法兰克福', chrome.i18n.getMessage('frankfurt')],
    display: chrome.i18n.getMessage('frankfurt'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-eu-central-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-eu-central-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-eu-central-1.data.aliyun.com',
    },
  },
  {
    keywords: ['london', 'eu-west-1', '英国', '伦敦', chrome.i18n.getMessage('london')],
    display: chrome.i18n.getMessage('singapore'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-eu-west-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-eu-west-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-eu-west-1.data.aliyun.com',
    },
  },
  {
    keywords: ['shanghaifinance', 'shanghaifin', 'cn-shanghai-finance-1', '上海金融云', '上海金', chrome.i18n.getMessage('shanghaiFinance')],
    display: chrome.i18n.getMessage('shanghaiFinance'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shanghai-finance-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shanghai-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shanghai-finance-1.data.aliyun.com',
    },
  },
  {
    keywords: ['shenzhenfinance', 'shenzhenfin', 'cn-shenzhen-finance-1', '深圳金融云', '深圳金', chrome.i18n.getMessage('shenzhenFinance')],
    display: chrome.i18n.getMessage('shenzhenFinance'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-shenzhen-finance-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-shenzhen-finance-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-shenzhen-finance-1.data.aliyun.com',
    },
  },
  {
    keywords: ['beijinggov', '北京政务云', '北京政', 'cn-north-2-gov-1', chrome.i18n.getMessage('beijingGov')],
    display: chrome.i18n.getMessage('beijingGov'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://ide2-cn-north-2-gov-1.data.aliyun.com/',
      [chrome.i18n.getMessage('dataMap')]: 'https://dmc-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataService')]: 'https://ds-cn-north-2-gov-1.data.aliyun.com',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://da-cn-north-2-gov-1.data.aliyun.com',
    },
  },
]

const products = [
  { keywords: ['data', 'ide', 'studio', '开发', chrome.i18n.getMessage('dataStudio')], content: chrome.i18n.getMessage('dataStudio'), description: chrome.i18n.getMessage('dataStudio') },
  { keywords: ['dmc', 'map', '地图', chrome.i18n.getMessage('dataMap')], content: chrome.i18n.getMessage('dataMap'), description: chrome.i18n.getMessage('dataMap') },
  { keywords: ['ds', 'service', '服务', chrome.i18n.getMessage('dataService')], content: chrome.i18n.getMessage('dataService'), description: chrome.i18n.getMessage('dataService') },
  { keywords: ['da', 'analyze', 'analytics', '分析', chrome.i18n.getMessage('dataAnalytics')], content: chrome.i18n.getMessage('dataAnalytics'), description: chrome.i18n.getMessage('dataAnalytics') },
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

  regionResult.forEach(region => {

    let restText = text?.trim?.();
    region?.keywords?.forEach?.(keyword => {
      restText = restText?.replace?.(keyword, '')?.trim?.();
    });

    products.forEach(product => {
      if (!region?.urlMap?.[product.content]) return;
      if (restText) {
        if (product?.keywords?.includes?.(restText)) {
          set.add({ content: `${region.display} ${product.content}`, description: `${region.display} ${product.description}` });
        }
      } else {
        set.add({ content: `${region.display} ${product.content}`, description: `${region.display} ${product.description}` });
      }
    });
  });

  productResult.forEach(product => {
    links.forEach(region => {
      if (!region?.urlMap?.[product.content]) return;
      set.add({ content: `${region.display} ${product.content}`, description: `${region.display} ${product.description}` });
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



