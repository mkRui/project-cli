import appLocaleData from 'react-intl/locale-data/zh';
import message from './locale/zh_CN';
import zhCN from 'antd/lib/locale-provider/zh_CN'

const zh = {
    message: message,
    locale: 'zh',
    data: appLocaleData,
    antd: zhCN
}


export default zh