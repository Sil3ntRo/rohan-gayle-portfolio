import React from 'react'
import {Banner} from '../utils'

import Layout from '../components/layout'
import SEO from '../components/seo'
const AboutPage = () => (
  <Layout>
    <SEO title="Home" keyword={['gatsby', 'application',
    'react']} />
    <h3>this is about page</h3>
  </Layout>
)

export default AboutPage