import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutMe from '../components/about-me'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keyword={['gatsby', 'application',
      'react']} />
    <AboutMe />
  </Layout>
)

export default AboutPage