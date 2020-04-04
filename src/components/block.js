import React from "react"  
import { checkPropTypes } from "prop-types"
import Hero from "./hero"

import tw from 'twin.macro'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'

import HeroParallex from "./hero_parallex"
import Jarallax from "./jarallax"

const Button = tw.button`bg-blue-200 border-blue-600 hover:bg-blue-900 border text-lg text-red-600 px-8 py-2 rounded`

const ParallexWrapper = styled.div(() => [
  css`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 8px;
    perspective-origin: 0%;
  `
])
const Block = props => {
  console.log('BLOCK', props.data)
  const block = props.data

  const renderBlock = (type, parallax) => {
    switch (type) {
      case 'Hero':
        if (parallax)
          return <Jarallax data={block} />
        else
          return <Hero data={block} />
      default:
        return <></>
    }
  }
  return (
    <>
      {typeof document !== "undefined" && renderBlock(block.BlockType, block.ParallaxScroll)}
    </>
  )
}

export default Block
