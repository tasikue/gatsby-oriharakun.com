import React from "react"
import { graphql, Link } from "gatsby"
import { ImgixGatsbyImage } from '@imgix/gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft, faChevronRight, faTag } from "@fortawesome/free-solid-svg-icons"

const Blogpost = ({ data, pageContext, location }) => (
  <Layout>
    <Seo
      pagetitle={data.microcmsBlogs.title}
      pagedesc={`${data.microcmsBlogs.title}のページ`}
      pagepath={location.pathname}
      pageimg={data.microcmsBlogs.eyecatch.url}
      pageimgw={data.microcmsBlogs.eyecatch.width}
      pageimgh={data.microcmsBlogs.eyecatch.height}
    />
    <div className="post box">
      <div className="container">

        {/* パンくずリスト */}
        <div className="pan-list">
        <Link to={`/`}>home</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to={`/${data.microcmsBlogs.category.categorySlug}/`}>
          {data.microcmsBlogs.category.categoryName}
        </Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to={`/blog/post/${data.microcmsBlogs.category.categorySlug}/${data.microcmsBlogs.slug}`}>
          {data.microcmsBlogs.title}
        </Link>
        </div>

        {/* アイキャッチ */}
        <div className="post-eyecatch">
          <figure>
          <ImgixGatsbyImage
            src={data.microcmsBlogs.eyecatch.url}
            imgixParams={{ auto: ["format", "compress"] }}
            layout="constrained"
            sourceWidth={data.microcmsBlogs.eyecatch.width}
            sourceHeight={data.microcmsBlogs.eyecatch.height}
            style={{ width: "100%" }}
            alt={`eyecatch ${data.microcmsBlogs.title}`}
          />
          </figure>
        </div>

        {/* 記事タイトル */}
        <div className="post-title">
          <h1>{data.microcmsBlogs.title}</h1>
          <hr />
        </div>

        {/* 記事情報 */}
        <aside className="post-info">
          {/* 投稿日 */}
          <time dateTime="data.microcmsBlogs.publicDate">
            <FontAwesomeIcon icon={faClock} />
            {data.microcmsBlogs.publicDate}
          </time>
          {/* カテゴリー */}
          <div className="post-cat-tag">
            <FontAwesomeIcon icon={faFolderOpen} />
            <ul>
              <Link to={`/cat/${data.microcmsBlogs.category.categorySlug}`}>
                <li key={data.microcmsBlogs.category.id}>
                  {data.microcmsBlogs.category.categoryName}
                </li>
              </Link>
            </ul>
            {/* タグ */}
            <FontAwesomeIcon icon={faTag} />
            <ul>
              <Link to={`/tag/${data.microcmsBlogs.tag[0].tagSlug}`}>
                <li key={data.microcmsBlogs.tag[0].id}>
                  {data.microcmsBlogs.tag[0].tagName}
                </li>
              </Link>
            </ul>
          </div>
        </aside>

        {/* 本文 */}
        <div className="post-body">
          <div
            dangerouslySetInnerHTML={{
              __html: `${data.microcmsBlogs.content}`,
            }}
            />
        </div>

        {/* 記事リンク */}
        <ul className="post-link">
        {/* 前へ */}
        {pageContext.next && (
          <li className="prev">
            <Link to={`/blog/post/${pageContext.next.category.categorySlug}/${pageContext.next.slug}/`} rel="prev">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>{pageContext.next.title}</span>
            </Link>
          </li>
        )}
        {/* 次へ */}
        {pageContext.previous && (
          <li className="next">
            <Link to={`/blog/post/${pageContext.previous.category.categorySlug}/${pageContext.previous.slug}/`} rel="next">
              <span>{pageContext.previous.title}</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </li>
        )}
        </ul>
      </div>
    </div>
  </Layout>
)
export default Blogpost;

export const query = graphql`
  query($id: String!) {
    microcmsBlogs(id: { eq: $id }) {
      title
      slug
      content
      publicDate(formatString: "YYYY年MM月DD日")
      category {
        id
        categoryName
        categorySlug
      }
      tag {
        id
        tagName
        tagSlug
      }
      eyecatch {
        url
        height
        width
      }
    }
  }
`
