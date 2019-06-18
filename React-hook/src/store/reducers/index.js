import { combineReducers } from 'redux'

import en from '@/i18n/en_US.js'
import zh from '@/i18n/zh_CN.js'
import ja from '@/i18n/ja_JP.js'

const Initstate = {
    lang: switchFont(window.localStorage.getItem('langFont'))
}


function switchFont (text) {
    switch (text) {
        case 'en':
            return en
        case 'zh':
            return zh
        case 'ja':
            return ja
        default :
            return zh
    }
}

const Common = (state = Initstate, action) => {
    switch (action.type) {
        case 'changeLang':
                return {...state, lang: switchFont(action.text)}
        default:
                return state
    }
}

let reducer = combineReducers({
    Common: Common
})

export default reducer

