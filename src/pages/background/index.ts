import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

const selfExtensionId = chrome?.runtime?.id;

const bizLinks = [
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
    keywords: [chrome.i18n.getMessage('shanghaiPre'), 'shanghai', 'pre', 'shang', '上海', '预发'],
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

const devBizLinks = [
  {
    keywords: [chrome.i18n.getMessage('innerPre'), 'inner', 'pre', '弹内', '预发'],
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
    keywords: [chrome.i18n.getMessage('innerPreLocal'), 'inner', 'pre', 'local', '弹内', '预发', '本地'],
    display: chrome.i18n.getMessage('innerPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-dataservice.alibaba-inc.com:8030',
      [chrome.i18n.getMessage('dgc')]: 'https://local.pre-dgc.dw.alibaba-inc.com:8002',
      [chrome.i18n.getMessage('tag')]: 'https://local.pre-dgc.dw.alibaba-inc.com:8000/tag',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiPreLocal'), 'shanghai', 'pre', 'local', 'shang', '上海', '预发', '本地'],
    display: chrome.i18n.getMessage('shanghaiPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-shanghai.data.aliyun.com:8030',
      [chrome.i18n.getMessage('dgc')]: 'https://local.pre-dgc-cn-shanghai.data.aliyun.com:8002',
      [chrome.i18n.getMessage('tag')]: 'https://local.pre-dgc-cn-shanghai.data.aliyun.com:8000/tag',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('shanghaiLocal'), 'shanghai', 'local', 'shang', 'local', '上海', '本地'],
    display: chrome.i18n.getMessage('shanghaiLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.prod-ds-cn-shanghai.data.aliyun.com:8030',
      [chrome.i18n.getMessage('dgc')]: 'https://local.prod-dgc-cn-shanghai.data.aliyun.com:8002',
      [chrome.i18n.getMessage('tag')]: 'https://local.prod-dgc-cn-shanghai.data.aliyun.com:8000/tag',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hangzhouPre'), 'hangzhou', 'pre', 'hang', '杭州', '预发'],
    display: chrome.i18n.getMessage('hangzhouPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-vpc-cn-hangzhou.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('hangzhouPreLocal'), 'hangzhou', 'pre', 'local', 'hang', '杭州', '预发', '本地'],
    display: chrome.i18n.getMessage('hangzhouPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-hangzhou.data.aliyun.com:8030',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingPre'), 'beijing', 'bei', 'pre', '北京', '预发'],
    display: chrome.i18n.getMessage('beijingPre'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://pre-ds-vpc-cn-beijing.data.aliyun.com',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('beijingPreLocal'), 'beijing', 'pre', 'local', 'bei', '北京', '预发', '本地'],
    display: chrome.i18n.getMessage('beijingPreLocal'),
    urlMap: {
      [chrome.i18n.getMessage('dataService')]: 'https://local.pre-ds-cn-beijing.data.aliyun.com:8030',
    },
  },
  // 其他
  {
    keywords: [chrome.i18n.getMessage('uiCodeInventory'), 'code', 'fe'],
    display: chrome.i18n.getMessage('uiCodeInventory'),
    urlMap: {
      [chrome.i18n.getMessage('dataStudio')]: 'https://code.alibaba-inc.com/alishu/datastudio',
      [chrome.i18n.getMessage('dataService')]: 'https://code.alibaba-inc.com/alishu/only-dataservice',
      [chrome.i18n.getMessage('dataMap')]: 'https://code.alibaba-inc.com/alishu/only-datamap',
      [chrome.i18n.getMessage('dataAnalytics')]: 'https://code.alibaba-inc.com/alishu/only-excel',
      [chrome.i18n.getMessage('di')]: 'https://code.alibaba-inc.com/alishu/xstudio-di',
      [chrome.i18n.getMessage('dgc')]: 'https://code.alibaba-inc.com/alishu/data-governance-center',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('ued'), 'ued', 'design'],
    display: chrome.i18n.getMessage('ued'),
    urlMap: {
      [chrome.i18n.getMessage('dgc')]: 'https://mgdone.alibaba-inc.com/file/112913719891129',
    },
  },
  {
    keywords: [chrome.i18n.getMessage('prd'), 'prd'],
    display: chrome.i18n.getMessage('prd'),
    urlMap: {
      [chrome.i18n.getMessage('dgc')]: 'https://aliyuque.antfin.com/dataworks/dybyo0',
    },
  },
];

const devLinks = [
  {
    keywords: ['dwuri', 'command'],
    display: chrome.i18n.getMessage('dwUri'),
    urlMap: {
      common: 'https://dcd.alibaba-inc.com/?env=prod#/help-doc/1-6#%E6%B3%A8%E5%86%8C%E4%BF%A1%E6%81%AF',
    },
  },
  {
    keywords: ['color'],
    display: chrome.i18n.getMessage('uiPalette'),
    urlMap: {
      common: 'https://dcd.alibaba-inc.com/?env=prod#/palette',
    },
  },
  {
    keywords: ['icon'],
    display: chrome.i18n.getMessage('uiIcon'),
    urlMap: {
      common: 'https://dcd.alibaba-inc.com/?env=prod#/icon-search',
    },
  },
  {
    keywords: ['aone'],
    display: chrome.i18n.getMessage('aone'),
    urlMap: {
      common: 'https://aone.alibaba-inc.com/v2/req/__var1__',
    },
  },
];

const products = [
  { keywords: [chrome.i18n.getMessage('dataStudio'), 'ide', 'studio', '开发'], content: chrome.i18n.getMessage('dataStudio'), description: chrome.i18n.getMessage('dataStudio') },
  { keywords: [chrome.i18n.getMessage('dataMap'), 'dmc', 'map', '地图'], content: chrome.i18n.getMessage('dataMap'), description: chrome.i18n.getMessage('dataMap') },
  { keywords: [chrome.i18n.getMessage('dataService'), 'dataservice', 'ds', '服务'], content: chrome.i18n.getMessage('dataService'), description: chrome.i18n.getMessage('dataService') },
  { keywords: [chrome.i18n.getMessage('dataAnalytics'), 'da', 'sqlx', 'analyze', 'analytics', '分析'], content: chrome.i18n.getMessage('dataAnalytics'), description: chrome.i18n.getMessage('dataAnalytics') },
  { keywords: [chrome.i18n.getMessage('dgc'), 'dgc', '治理'], content: chrome.i18n.getMessage('dgc'), description: chrome.i18n.getMessage('dgc') },
  { keywords: [chrome.i18n.getMessage('tag'), 'tag', '标签'], content: chrome.i18n.getMessage('tag'), description: chrome.i18n.getMessage('tag') },
  { keywords: [chrome.i18n.getMessage('di'), 'di', 'integrate', '集成'], content: chrome.i18n.getMessage('di'), description: chrome.i18n.getMessage('di') },
];

// chrome.omnibox.setDefaultSuggestion({
//   description: chrome.i18n.getMessage('console'),
// });

const intersection = (array1 = [], array2 = []) => {
  return array1?.filter?.(value => array2?.includes?.(value)) || [];
}

const notIntersection = (array1 = [], array2 = []) => {
  const inter = intersection(array1, array2);
  let result = [];

  if (inter?.length > 0) {
    array1?.forEach?.(value => {
      if (!inter?.includes?.(value)) {
        result?.push?.(value);
      }
    });
    array2?.forEach?.(value => {
      if (!inter?.includes?.(value)) {
        result?.push?.(value);
      }
    });
  } else {
    result = [...array1, ...array2];
  }
  return result;
}

let tempText;

// default suggestion
chrome.omnibox.onInputStarted.addListener(function () {
});

chrome.omnibox.onInputChanged.addListener(function (text, suggest) {

  const textArr = text?.split?.(' ') || [];

  const set = new Set<{ content: string; description: string; deletable?: boolean; searchedCounts?: number }>();

  const calMatch = (str: string, keyword: string) => {
    if (!keyword) return str;
    let _keyword = keyword?.trim?.();
    return str?.replaceAll ? str?.replaceAll?.(_keyword, `<match><dim>${_keyword}</dim></match>`) : str;
  }

  const allBizLinks = bizLinks.concat(devBizLinks);

  allBizLinks.forEach(region => {
    products.forEach(product => {
      if (!region?.urlMap?.[product.content]) return;
      const searched = intersection((region?.keywords || [])?.concat?.(product?.keywords || []), textArr);
      if (searched?.length > 0) {
        const description = `${region.display} ${product.description} <url>${region.urlMap?.[product.content]}</url>`;
        set.add({ content: `${region.display} ${product.content}`, description: calMatch(description, text), searchedCounts: searched?.length || 0 });
      }
    });
  });

  devLinks.forEach(region => {

    if (region?.urlMap?.common) {
      const searched = intersection((region?.keywords || []), textArr);
      if (searched?.length > 0) {
        const content = region.display;
        const description = `${region.display} <url>${region.urlMap?.common}</url>`;
        set.add({ content, description: calMatch(description, text), searchedCounts: searched?.length || 0 });
      }
    }

    products.forEach(product => {
      if (!region?.urlMap?.[product.content]) return;
      const searched = intersection((region?.keywords || [])?.concat?.(product?.keywords || []), textArr);
      if (searched?.length > 0) {
        const content = `${region.display} ${product.content}`;
        const description = `${region.display} ${product.description} <url>${region.urlMap?.[product.content]}</url>`;
        set.add({ content, description: calMatch(description, text), searchedCounts: searched?.length || 0 });
      }
    });
  });

  const result: chrome.omnibox.SuggestResult[] = Array.from(set) || [];

  result.sort((a, b) => (b as any)?.searchedCounts - (a as any)?.searchedCounts);
  result?.forEach?.((item: any) => delete item?.searchedCounts); // remove searchedCounts

  suggest(result);

  tempText = text;

});

chrome.omnibox.onInputEntered.addListener(function (text, disposition) {

  const textArr = text?.split?.(' ') || [];
  let restVars = [];

  let link;

  const allBizLinks = bizLinks.concat(devBizLinks);

  allBizLinks.findIndex(region => {
    return products?.findIndex?.(product => {
      const content = `${region.display} ${product.content}`;
      if (text === content) {
        link = region.urlMap[product.content];
        return true;
      }
    }) !== -1;
  });

  if (!link) {
    devLinks.findIndex(region => {
      let existed = products?.findIndex?.(product => {
        const content = `${region.display} ${product.content}`;
        if (text === content) {
          link = region.urlMap[product.content];
          return true;
        }
      }) !== -1;

      if (existed) return true;

      if (region?.urlMap?.common) {

        if (text === region?.display) {
          link = region?.urlMap?.common;
          restVars = notIntersection(region?.keywords, tempText?.split?.(' ') || []);
          return true;
        } else if (intersection(region?.keywords, textArr)?.length > 0) {
          link = region?.urlMap?.common;
          restVars = notIntersection(region?.keywords, textArr);
          return true;
        }
      }
    });
  }

  if (link) {

    // check path var, starting from 1
    for (let i = 1; i < 10; i++) {
      const flag = `__var${i}__`;
      if (link?.includes?.(flag)) {
        if (restVars?.[i - 1]) link = link?.replaceAll?.(flag, restVars?.[i - 1] || '');
      } else break;
    }

    chrome?.tabs?.create?.({ url: link });
  }
  else chrome?.tabs?.create?.({ url: 'https://dataworks.console.aliyun.com/' }); // default 至管控台

});

chrome.omnibox.onInputCancelled.addListener(function () {

});

chrome.omnibox.onDeleteSuggestion.addListener(function (text) {

});



