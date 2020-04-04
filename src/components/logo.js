import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import tw from 'twin.macro'
const LogoImage = tw.img`h-20 rounded-full py-2 px-3`
const LogoText = tw.p`text-white`
const LogoWrapper = tw.div`flex justify-between`
const TextWrapper = tw.div`flex items-center text-xs font-orb`

const Logo = props => {
  const { strapiLogo } = useStaticQuery(
    graphql`
      query {
        strapiLogo {
          LogoImage {
            publicURL
          }
          LogoText
        }
      }
    `
  )

  return (
    <LogoWrapper>
      <a href="/home">
        <LogoImage src={strapiLogo.LogoImage.publicURL} alt="Logo" />
      </a>
      <TextWrapper>
        <LogoText>{strapiLogo.LogoText}</LogoText>
      </TextWrapper>
    </LogoWrapper>
  )
}

export default Logo
