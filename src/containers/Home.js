import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'
//
import coverPhoto from './assets/homeCover.jpg'
import { canary as canary} from '../style-constants'

const CoverPhoto = styled.img`
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
  background-color: black;
  `

const ContentWrapper = styled.div`
  position: fixed; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
  z-index: -10;
  `

const BigText = styled.h1`
  font-size: 10rem;
  letter-spacing: 5px;
  line-height: 165px;
  color: ${canary};
  margin-top: 20px;
  font-family: Lora, serif;
`

export default withSiteData(() => (
  <div>
    <div>
      <BigText> Hello friends. </BigText>
    </div>
  <ContentWrapper>
    <CoverPhoto  />
  </ContentWrapper>
  </div>
))
