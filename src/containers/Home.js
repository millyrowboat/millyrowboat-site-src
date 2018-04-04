import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'
//
import coverPhoto from './assets/homeCover.jpg'

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
export default withSiteData(() => (
  <div>
  <ContentWrapper>
    <CoverPhoto  />

  </ContentWrapper>
  </div>
))
