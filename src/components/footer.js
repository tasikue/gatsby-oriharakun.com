import React from "react"
import { Link } from "gatsby"

import imgGatsby from "../images/title_logo_ver.3.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="footer">
  <div className="box">
    <div className="container">
      {/* フッタータイトル */}
      <div className="footer-title">
        <Link to={`/`}>
          <figure>
            <img src={imgGatsby} alt="footer-title" />
          </figure>
          <p>なんかいろいろしています。モットーは浅く広く。</p>
        </Link>
      </div>
      {/* SNSリンク */}
      <ul className="sns">
        <li>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="sr-only">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://youtube.com/">
            <FontAwesomeIcon icon={faYoutube} />
            <span className="sr-only">Youtube</span>
          </a>
        </li>
        <li className="svg-icon">
          <a href="https://www.pixiv.net/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><desc>pixiv</desc><path d="M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z" /></svg>
            <span className="sr-only">pixiv</span>
          </a>
        </li>
        <li className="svg-icon">
          <a href="https://www.nicovideo.jp/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><desc>niconico</desc><path d="M.4787 7.534v12.1279A2.0213 2.0213 0 0 0 2.5 21.6832h2.3888l1.323 2.0948a.4778.4778 0 0 0 .4043.2205.4778.4778 0 0 0 .441-.2205l1.323-2.0948h6.9828l1.323 2.0948a.4778.4778 0 0 0 .441.2205c.1838 0 .3308-.0735.4043-.2205l1.323-2.0948h2.6462a2.0213 2.0213 0 0 0 2.0213-2.0213V7.5339a2.0213 2.0213 0 0 0-2.0213-1.9845h-7.681l4.4468-4.4469L17.1637 0l-5.1452 5.1452L6.8 0 5.6973 1.1025l4.4102 4.4102H2.5367a2.0213 2.0213 0 0 0-2.058 2.058z" /></svg>
          </a>
          <span className="sr-only">niconico</span>
        </li>
        <li>
          <a href="http://instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="sr-only">Instagram</span>
          </a>
        </li>
      </ul>
      </div>
    </div>
    {/* コピーライト */}
    <div className="copy-right">
      <small>&copy;2019 oriharakun.com, Inc.</small>
    </div>
  </footer>
)
export default Footer;
