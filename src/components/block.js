import React from "react"  
import { checkPropTypes } from "prop-types"
import Hero from "./hero"

import tw from 'twin.macro'
import HeroParallex from "./hero_parallex"
const Button = tw.button`bg-blue-200 border-blue-600 hover:bg-blue-900 border text-lg text-red-600 px-8 py-2 rounded`

const Block = props => {
  console.log('BLOCK', props.data)
  const block = props.data

  const renderBlock = type => {
    switch (type) {
      case 'Hero':
        return <HeroParallex data={block} />
      default:
        return <></>
    }
  }
  return (
    <div>
      <Button>Testing Tailwind</Button>
      {renderBlock(block.BlockType)}
    </div>
  )
}

export default Block