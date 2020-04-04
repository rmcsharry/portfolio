import React from "react"

import tw from 'twin.macro'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'

const ReactMarkdown = require('react-markdown')


const HeroImage = styled.div(({ publicURL }) => [
  css`
    height: 100%;
    width: 100%;
    &:after {
      /* Display and position the pseudo-element */
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    
      /* Move the pseudo-element back away from the camera,
       * then scale it back up to fill the viewport.
       * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
      transform: translateZ(-1px) scale(1.5);
      /* Force the background image to fill the whole element. */
      background-size: 100%;
      /* Keep the image from overlapping sibling elements. */
      z-index: -1;
      background: url(${publicURL}) no-repeat 50%/cover;
    }
  `  
])
const Overlay = styled.div(() => [
  css`
  height: 100vh;
  width: 100%;
  opacity: 0.5;
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1px) scale(1.5);
    background-size: 100%;
    background: black;
  }
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
const HeroTextContainer = styled.div(() => [
  css`
    margin-top: -400px;
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
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
  `
])

const Hero = props => {
  const block = props.data

  return (
    <div>
      <HeroImage publicURL={block.BlockMedia.publicURL}>
      <Overlay/>
        {/* <img src={block.BlockMedia.publicURL} width="200px" alt="background"/> */}
        <HeroTextContainer>
      <HeroText hPosition={block.TextPositionHorizontal}>
        <ReactMarkdown source={block.BlockText} />
          </HeroText>
          </HeroTextContainer>
      </HeroImage>
        
    </div>
  )
}

export default Hero
