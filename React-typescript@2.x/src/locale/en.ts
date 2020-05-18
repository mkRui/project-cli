import { createIntl, createIntlCache } from 'react-intl'

import message from './localeData/en';
import antLocale from 'antd/lib/locale-provider/en_US';


export const cache = createIntlCache()

const en = createIntl(
    {
        messages: message,
        locale: 'en',
    },
    cache
)

export {
    antLocale,
    en
}