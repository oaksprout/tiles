import CeramicClient from '@ceramicnetwork/http-client'
import { Router } from '@reach/router'

import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Document from './Document'
import DocumentList from './DocumentList'
import { Box } from '@chakra-ui/layout'

export interface DocumentInterface {
  docId: string
  timestamp?: string
}

const API_URL = 'https://gateway-clay.ceramic.network'
export const ceramic = new CeramicClient(API_URL)

interface AppProps extends RouteComponentProps {
  docId?: string
}

export const App = (props: AppProps) => {
  return (
    <>
      <Header />
      <Box minH="75vh">
        <Router>
          <DocumentList default />
          <Document path="/document/:docId" />
        </Router>
      </Box>
      <Footer />
    </>
  )
}
