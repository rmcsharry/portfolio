import React from "react"

import tw from 'twin.macro'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'

const ReactMarkdown = require('react-markdown')

const HeroImage = styled.div(({ publicURL }) => [
  css`
    height: 100vh;
    width: 100%;
    opacity: 0.5;
    background: url(${publicURL}) no-repeat 50%/cover;  
  `  
])
const HeroWrapper = styled.div(() => [
  css`
    height: 100%;
    width: 100vw;
    position: relative;
    background: black;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 8px;
    perspective-origin: 0%;
  `
])
const HeroTextContainer = styled.div(() => [
  css`
    margin-top: -700px;
    margin-bottom: 150px;
    transform-origin: 0;
    transform: translateZ(3px) scale(0.625);
  `
])
const HeroText = styled.div(({hPosition}) => [
  tw`text-white`,
  css`
    p {${tw`pt-4`}}
  `,
  hPosition === 'Right' ?
  css`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-10%, -60%);
  `: css`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
])

const HeroParallex = props => {
  const block = props.data

  return (
    <HeroWrapper>
      <HeroImage publicURL={block.BlockMedia.publicURL} />

      <HeroTextContainer>
        <HeroText hPosition={block.TextPositionHorizontal}>
          <ReactMarkdown source={block.BlockText} />
        </HeroText>
      </HeroTextContainer>
    </HeroWrapper>
  )
}

export default HeroParallex
