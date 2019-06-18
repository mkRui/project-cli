import React from 'react'

import { injectIntl } from'react-intl'

import { useDispatch, useMappedState } from '@/store/index'

const Login = (props) => {
    const { intl } = props
    const dispatch = useDispatch()

    const changeLang = (text) => {
        dispatch({ type: 'changeLang', text })
    }

    return (
        <div onClick={changeLang.bind(this, 'en')} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', fontSize: '360px'}}>
            { intl.messages.state }
        </div>
    )
}


export default injectIntl(Login)