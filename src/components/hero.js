import React from "react"

import tw from 'twin.macro'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'
import HeroText from "./hero_text"

const ReactMarkdown = require('react-markdown')

const HeroImage = styled.div(({ publicURL }) => [
  css`
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background: url(${publicURL}) no-repeat 50%/cover;  
  `  
])
const HeroWrapper = styled.div(() => [
  css`
    height: 100vh;
    width: 100vw;
    position: relative;
    background: black;
  `
])

const Hero = props => {
  const block = props.data

  return (
    <HeroWrapper>
      <HeroImage publicURL={block.BlockMedia.publicURL} />
      <HeroText data={block} />
    </HeroWrapper>
  )
}

export default Hero
