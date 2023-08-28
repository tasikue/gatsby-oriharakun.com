import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      title: file(relativePath: {eq: "title_logo_ver.3.png"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      top: file(relativePath: {eq: "top-illust.png"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      home: file(relativePath: {eq: "nav/nav-home-wh1.2.png"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      about: file(relativePath: {eq: "nav/nav-about-wh1.2.png"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      comic: file(relativePath: {eq: "nav/nav-comic-wh1.2.png"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      game: file(relativePath: {eq: "nav/nav-game-wh1.2.png"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      made: file(relativePath: {eq: "nav/nav-made-wh1.2.png"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      illust: file(relativePath: {eq: "nav/nav-illust-wh1.2.png"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `)
return (
  <header className="header">
    <div className="box">
      <div className="container">

        {/* ナビゲーションメニュー */}
        <nav className="global-nav">
          <ul>
            <li>
              <Link to={`/`}>
                <GatsbyImage
                  image={data.home.childImageSharp.gatsbyImageData}
                  alt="" style={{ height: "100%" }} />
              </Link>
            </li>
            <li>
              <Link to={`/about/`}>
                <GatsbyImage
                  image={data.about.childImageSharp.gatsbyImageData}
                  alt="" style={{ height: "100%" }} />
              </Link>
            </li>
            <li>
              <Link to={`/ar-comic/`}>
                <GatsbyImage
                  image={data.comic.childImageSharp.gatsbyImageData}
                  alt="" style={{ height: "100%" }} />
              </Link>
            </li>
            <li>
              <Link to={`/ar-game/`}>
                <GatsbyImage
                  image={data.game.childImageSharp.gatsbyImageData}
                  alt="" style={{ height: "100%" }} />
              </Link>
            </li>
            <li>
              <Link to={`/ar-made/`}>
                <GatsbyImage
                  image={data.made.childImageSharp.gatsbyImageData}
                  alt="" style={{ height: "100%" }} />
              </Link>
            </li>
            <li>
              <Link to={`/ar-illust/`}>
                  <GatsbyImage
                    image={data.illust.childImageSharp.gatsbyImageData}
                    alt="" style={{ height: "100%" }} />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-top">

          {/* ブログタイトル */}
          <div className="header-title">
            <Link to={`/`}>
              <figure>
                <GatsbyImage
                  image={data.title.childImageSharp.gatsbyImageData}
                  alt="blog-title" style={{ height: "100%" }} />
              </figure>
              <p>なんかいろいろしています。モットーは浅く広く。</p>
            </Link>
          </div>

          {/* ヘッダートップ画像 */}
          <div  className="header-illust">
            <figure>
              <GatsbyImage
                image={data.top.childImageSharp.gatsbyImageData}
                alt="header-top-illust" style={{ height: "100%" }} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </header>
)}
export default Header;
