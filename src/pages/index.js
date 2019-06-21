import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/HomepageComponents/Projects'
import {Title} from '../components/HomepageComponents/Title'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Projects />

  </Layout>
)

export default IndexPage
