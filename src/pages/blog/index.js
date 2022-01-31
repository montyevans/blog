import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

const BlogPage = (props) => {
  let data = props.data;
  console.log("-------");
  console.log(props.pageContext);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/$node.slug`}>
                  {node.frontmatter.name}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.datePublished}</p>
            </article>
          ))
      }
      </ul>
      <p>My cool posts will go in here</p>
    </Layout>
  )


}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
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

export default BlogPage