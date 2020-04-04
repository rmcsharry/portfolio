import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Block from "../components/block"

const HeroAType = props => {
  const { strapiBlock } = useStaticQuery(
    graphql`
      query {
        strapiBlock {
          BlockName
        }
      }
    `
  )

  console.log('atype',props.data)
  return (
    <div>
      <div>{strapiBlock.BlockName}</div>
    </div>
  )
}

export default HeroAType 