import React from "react"  
import { graphql } from "gatsby"

// import ReactMarkdown from "react-markdown"  
// import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`  
  query PageQuery($strapiId: Int!) {
    strapiPage(strapiId: { eq: $strapiId }) {
      strapiId
      Name
      updated_at
    }
  }
`

const PageTemplate = ({ data }) => {
  console.log(data.strapiPage)

  const page = data.strapiPage
  return (
    <Layout>
      Test
      <div>{page.Name}</div>
    </Layout>
  )
}

export default PageTemplate
