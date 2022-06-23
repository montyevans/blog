import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'

import { Helmet } from "react-helmet";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  postDate
} from '../components/layout.module.scss'

const IndexPage = (props) => {
  let data = props.data;
  return (
    <Layout pageTitle="Latest">
      <ul>
      {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>

                <Link className={navLinkText} to={`/blog/${node.slug}`}>
                  {node.frontmatter.name}
                </Link>

              <p className={postDate}>{node.frontmatter.datePublished}</p>
            </article>
          ))
      }
      </ul>
      {/* <StaticImage
        alt="Clifford the Big Red Dog"
        src="../images/Claude.jpeg"
      /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}, limit: 5) {
      nodes {
        frontmatter {
          name
          datePublished(formatString: "MMMM D, YYYY")
          unique
        }
        id
        slug
      }
    }
  }
`

export default IndexPage