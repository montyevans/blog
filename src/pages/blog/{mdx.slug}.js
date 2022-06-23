import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

import { MDXProvider } from "@mdx-js/react"


import { postDate, fullPostTitle } from '../../components/layout.module.scss'

import '../../components/layout.module.scss'

const BlogPost = ({ data }) => {
  console.log("Data:");
  console.log(data);
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1 className={fullPostTitle}>{data.mdx.frontmatter.name}</h1>
      <p className={postDate}>{data.mdx.frontmatter.datePublished}</p>

      {/* <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p> */}



      <MDXRenderer>{data.mdx.body}</MDXRenderer>

    </Layout>
  )
}

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      title
      datePublished(formatString: "MMMM D, YYYY")
      name
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export default BlogPost // Do we need this? Nothing ever imports it, right? It may be an internal Gatsby thing.