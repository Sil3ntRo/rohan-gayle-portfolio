import React, {Component} from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'

export default class Footer extends Component {

  render() {
    return (
      <FooterWrapper>
        <div className="footer-css">
          <a aria-current="home" href="/">home</a>
          <span className="separator">-</span>
          <a href="mailto:rgayle33614@gmail.com">email</a>
          <span className="separator">-</span>
          <a href='https://www.github.com/Sil3ntRo'>github</a>
          <span className="separator">-</span>
          <a href='https://www.linkedin.com/in/rohangayle'>Linkedin</a>
        </div>
        <p className="copyright">copyright &copy; 2019 Rohan Gayle</p>
      </FooterWrapper>

    )
  }
}

const FooterWrapper = styled.footer`
  text-align: center;
  background: ${styles.colors.mainPurple2};
  justify-content: space-between;
  .footer-css {
    
    font-size: 1rem;
    font-family: "Roboto Mono";
    margin: 30rem auto 40px;
    text-transform: uppercase;
    bottom: 0px;
  }
  .separator {
    margin: 0px 1rem;
  
  }
  
`