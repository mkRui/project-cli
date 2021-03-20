import { createIntl, createIntlCache } from 'react-intl'

import message from './localeData/zh_CN';

import antLocale from 'antd/lib/locale-provider/zh_CN';

export const cache = createIntlCache()

const zhCN = createIntl(
    {
        messages: message,
        locale: 'zh',
    },
    cache
)

export {
  zhCN,
  antLocale
}
