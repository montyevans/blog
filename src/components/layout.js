import * as React from 'react'
import { Helmet } from 'react-helmet'

import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  grayLine,
  footer,
  footerImage
} from './layout.module.scss'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
      </Helmet>
      <title>{pageTitle} || {data.site.siteMetadata.title}</title>
      <header className={siteTitle} >{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className={grayLine}></div>
      <main>
        {children}
      </main>
      <div className={grayLine}></div>
      <footer className={footer}>
        <Link to="https://twitter.com/montymevans">
          <StaticImage
            className={footerImage}
            src="../images/twitter.png"
          />
        </Link>
      </footer>
    </div>
  )

}

export default Layout