import React from 'react'
import styled from 'styled-components'
import {styles} from '../utils'

export default function Banner(title,subtitle,children) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      {children}
    </div>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  .title{
    color:${styles.colors.mainSkyBlue}
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({spacing: '0.75rem'})}
  }
  .subtitle {
    color: ${styles.colors.mainSkyBlue};
    ${styles.textSlanted};
    ${styles.letterSpacing({spacing: '0.15rem'})};
    font-size: 1.5rem;
    text-transform: capitalize;
    
  }

`

Banner.defaultProps = {
  title: 'default title',
}