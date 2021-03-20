import { createIntl, createIntlCache } from 'react-intl'

import message from './localeData/ja';

import antLocale from 'antd/lib/locale-provider/ja_JP';

export const cache = createIntlCache()

const ja = createIntl(
    {
        messages: message,
        locale: 'ja',
    },
    cache
)

export {
  ja,
  antLocale
}

