import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ location }) => (
  <Layout>
    <Seo
      pagetitle="ページが見つかりません"
      pagepath={location.pathname}
    />
    
    <div className="box">
      <div className="not-found">
        <h1>400 何もない空間へようこそ</h1>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
