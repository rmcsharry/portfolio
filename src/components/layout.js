import React from "react"  
import PropTypes from "prop-types"

import Seo from "./seo"
import tw from 'twin.macro'
import Navbar from "./navbar"

const Wrapper = tw.div`bg-white`
const Main = tw.main`mx-auto pt-16 z-50`

const Layout = ({ children }) => {  
  return (
    <Wrapper>
      <Seo title="Richard McSharry" />
      <Navbar />
      <Main>{children}</Main>
    </Wrapper>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout
