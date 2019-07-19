import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <ul>
      {
        data.items.nodes.map(item => (
          <li key={item.id}>{item.title}</li>
        ))
      }
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    items:allWebhookItem {
      nodes {
        id
        title
      }
    }
  }
`

export default IndexPage
