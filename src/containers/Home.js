import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'
//
import coverPhoto from './assets/homeCover.jpg'
import { canary as canary} from '../style-constants'

const ContentWrapper = styled.div`
  background: url(${coverPhoto}) no-repeat center center fixed;
  background-size: cover;
  position: fixed; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
  z-index: -10;
  `

const DarkBg = styled.div`
  background-color: black;
  opacity: .5;
  position: fixed; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
  z-index: -5;
  `

const BigText = styled.h1`
  font-size: 6rem;
  letter-spacing: 5px;
  line-height: 165px;
  color: whitesmoke;
  margin-top: 20px;
  font-family: Lora, serif;
  @media screen and (min-width: 500px) {
    font-size: 10rem;
}
`

export default withSiteData(() => (
  <div>
    <div>
      <BigText> Hello friends. </BigText>
    </div>
    <DarkBg />
    <ContentWrapper />
  </div>
))
