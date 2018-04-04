import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import NavBar from './containers/NavBar'
import { Layout } from 'antd'
import { rouge as rouge, canary as canary, contentWidth as contentWidth} from './style-constants'
const { Header, Content} = Layout;

injectGlobal`
  body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  nav {
    background: ${rouge};
    .nav-content {
    max-width: ${contentWidth}px;
    margin: 0 auto;
    font-size: 1.2rem;
    }
    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }
  .content {
    padding: 1rem;
    max-width:${contentWidth}px;
    margin: 0 auto;
  }
  .site {
  margin: 0 auto;
  img {
    max-width: 100%;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Header>
        <NavBar />
    </Header>
    <Content>
      <div className="content">
        <Routes />
      </div>
    </Content>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
