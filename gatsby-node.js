/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {  
  const { createPage } = actions
  const pageTemplate = path.resolve('./src/templates/page_template.js')

  const result = await graphql(
    `query {
      pages: allStrapiPage {
        edges {
          node {
            strapiId
            Slug
            blocks {
              id
            }
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const pages = result.data.pages.edges
  pages.forEach((page, index) => {
    createPage({
      path: `/${page.node.Slug}`,
      component: pageTemplate,
      context: {
        strapiId: page.node.strapiId,
      },
    })
  })
}