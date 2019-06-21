import React from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'

export function Title({title}) {
  return (
    <TitleWrapper>
      <h3 className="title">{title}</h3>
      <div className="underline"/>
    </TitleWrapper>
  )
}

Title.defaultProps = {
  title: 'our title'

}


const TitleWrapper = styled.div`
  text-align: center;
  .title{
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Source Sans Pro','Roboto Mono';
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  
  }
`
export default Title