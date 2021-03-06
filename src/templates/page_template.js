import React from "react"  
import { graphql } from "gatsby"

import { orderBy } from 'lodash'

import Layout from "../components/layout"
import Block from "../components/block"

export const query = graphql`  
  query PageQuery($strapiId: Int!) {
    strapiPage(strapiId: { eq: $strapiId }) {
      strapiId
      Name
      updated_at
      blocks {
        id
        OrderOnPage
        BlockName
        BlockText
        BlockType
        TextPositionHorizontal
        TextPositionVertical
        ParallaxScroll
        BlockMedia {
          publicURL
        }
      }
    }
  }
`

class PageTemplate extends React.Component {

  render() {
    console.log(this.props.data.strapiPage)

    const page = this.props.data.strapiPage

    let sortedBlocks = orderBy(page.blocks, ['OrderOnPage'],['asc']);
    let blocks = sortedBlocks.map(function(hero, index) {
      return <Block key={index} data={hero} />
    })

    return (
      <Layout>
        {blocks}
        <div>{page.Name}</div>
      </Layout>
    )
  }
}

export default PageTemplate
