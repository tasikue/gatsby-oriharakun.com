import React from "react"
import { graphql, Link } from "gatsby"
import { ImgixGatsbyImage } from '@imgix/gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Bloglist = ({ data, location, pageContext }) => (
  <Layout>
  <Seo
    pagetitle="ブログリスト"
    pagedesc="記事一覧ページ"
    pagepath={location.pathname}
  />

    <section className="bloglist box">
      <div className="container">
        <div className="bloglist-title">
          <h1>記事一覧</h1>
          <hr />
        </div>

        {/* 記事 */}
        <div className="bloglist-post">
          {data.allMicrocmsBlogs.edges.map(({ node }) => (
            <article key={node.id}>
            <Link to={`/blog/post/${node.category.categorySlug}/${node.slug}`}>
              <figure>
              <ImgixGatsbyImage
                src={node.eyecatch.url}
                imgixParams={{ auto: ["format", "compress"] }}
                layout="constrained"
                sourceWidth={node.eyecatch.width}
                sourceHeight={node.eyecatch.height}
                style={{ width: "100%" }}
                alt={`eyecatch ${node.title}`}
              />
              </figure>
              <h3>{node.title}</h3>
              </Link>
            </article>
          ))}
        </div>

        {/* ページネーション */}
        <ul className="pagenation">
          {!pageContext.isFirst && (
            <li className="prev">
              <Link
                to={
                  pageContext.currentPage === 2
                    ? `/bloglist/`
                    : `/bloglist/${pageContext.currentPage - 1}/`
                }
                rel="prev"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              <span>前ページ</span>
              </Link>
            </li>
          )}

          {!pageContext.isLast && (
            <li className="next">
              <Link to={`/bloglist/${pageContext.currentPage + 1}/`} rel="next">
                <span>後ページ</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  </Layout>
)

export default Bloglist;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsBlogs(
      sort: {publicDate: DESC}
      filter: {category: {categorySlug: {glob: "ar*"}}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            url
            width
            height
          }
          category {
            categorySlug
          }
        }
      }
    }
  }
`
