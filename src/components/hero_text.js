import React from "react"

import tw from 'twin.macro'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'

const ReactMarkdown = require('react-markdown')

const Text = styled.div(({hPosition}) => [
  tw`text-white`,
  css`
    p {${tw`pt-4`}}
    h1 {
      font-family: 'Orbitron';
    }
  `,
  hPosition === 'Left' ?
    css`
    position: absolute;
    top: 50vh;
    left: 20vw;
    z-index: 10;
    transform: translate(-10%, -0%);
    text-align: left;
  `: hPosition === 'Center' ?
  css`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    text-align: center;
  `: // Right
  tw`z-10 absolute top-1/2 ml-12 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
  `
])

const HeroText = props => {
  const block = props.data

  return (
    <Text hPosition={block.TextPositionHorizontal}>
      <ReactMarkdown source={block.BlockText} />
    </Text>
  )
}

export default HeroText
