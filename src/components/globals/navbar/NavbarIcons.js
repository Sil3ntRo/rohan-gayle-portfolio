import React, { Component } from "react"
import styled from 'styled-components';
import {styles} from '../../../utils'
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa"

class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id:1,
        icon:<FaEnvelope className="icon envelope-icon"/>,
        path: 'emailto:rgayle33614@gmail.com',
      },
      {
        id:2,
        icon:<FaGithub className="icon github-icon"/>,
        path: 'https://www.github.com//Sil3ntRo'
      },
      {
        id:3,
        icon:<FaLinkedin className="icon linkedin-icon"/>,
        path: 'https://www.linkedin.com/in/rohangayle'
      }
    ]
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
  .envelope-icon {
    color: #fff;
  }
  
  .github-icon {
    color: #262626;
  }
  
  .icon:hover{
    color: ${styles.colors.mainSkyBlue}
  
  }
  
  display: none;
  @media(min-width:768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  
  }


`


export default NavbarIcons