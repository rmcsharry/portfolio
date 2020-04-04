import React from "react"  
import PropTypes from "prop-types"

import Seo from "./seo"
import tw from 'twin.macro'
import Navbar from "./navbar"
import HeroAType from "./hero_a_type"

const Wrapper = tw.div`bg-white`
const Main = tw.main`mx-auto pt-16`

const Layout = ({ children }) => {  
  return (
    <Wrapper>
      <Seo title="Richard McSharry" />
      <Navbar />
      <Main>{children}</Main>
      <HeroAType data={'1'}/>
    </Wrapper>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout
