import React from "react"  
import Block from "../components/block"

const HeroAType = props => {
  console.log(props)
  return (
    <div>
      <div>{props.data.block}</div>
      <Block data={props.data}></Block>
    </div>
  )
}

export default HeroAType 