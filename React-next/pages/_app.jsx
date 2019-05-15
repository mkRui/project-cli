import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import store from './../store'

class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component { ...pageProps } />
                </Provider>
            </Container>
        )
    }
}

export default MyApp