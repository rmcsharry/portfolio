import React from "react"
import { jarallax } from "jarallax"

import tw from 'twin.macro'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'
import HeroText from "./hero_text"

const JarallaxWrapper = styled.div(() => [
  css`
    position: relative;
    height: 100vh;
    &:after {
      content: " ";
      background: black;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      opacity: 0.5;
      width: 100%;
    }
  `
])

class Jarallax extends React.Component {
  
  componentDidMount() {
    jarallax(document.querySelectorAll(".jarallax"), { speed: 0.2 })
  }
  // componentWillUnmount() {
  //   jarallax(document.querySelectorAll(".jarallax"), "destroy")
  // }
  render() {
    const block = this.props.data
    console.log("JARA", block)
    return (
      <>
      <JarallaxWrapper className="jarallax">
          <img className="jarallax-img" src={block.BlockMedia.publicURL} />
          <HeroText data={block} />
      </JarallaxWrapper>
        
        </>
    )
  }
}

export default Jarallax