import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'

import withApolloClient from '../lib/with-apollo-client'

import { LocalState } from '../components/LocalState'
import Header from '../components/Header'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
        <ApolloProvider client={apolloClient}>
          <LocalState>
              <ThemeProvider theme={theme}>
                  <Header />
                  <Component {...pageProps} />
                  <style jsx global>{`
                    body {
                      margin: 0;
                      padding: 0;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 1.8;
                      color: #333;
                      font-family: sans-serif;
                    }
                    h1 {
                      font-weight: 700;
                    }
                    p {
                      margin-bottom: 10px;
                    }
                  `}</style>
              </ThemeProvider>
          </LocalState>
        </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)