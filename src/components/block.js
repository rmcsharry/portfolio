import React from "react"  
import { checkPropTypes } from "prop-types"
import Hero from "./hero"


const Block = props => {
  console.log('BLOCK', props.data)
  const block = props.data

  const renderBlock = type => {
    switch (type) {
      case 'Hero':
        return <Hero data={block} />
      default:
        return <></>
    }
  }
  return (
    <div>
      {renderBlock(block.BlockType)}
    </div>
  )
}

export default Block