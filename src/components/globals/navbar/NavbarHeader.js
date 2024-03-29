import React, { Component } from "react"
import {Link} from 'gatsby';
import logo from '../../../images/logo.png'
import {FaAlignRight} from "react-icons/fa"
import styled from 'styled-components'
import {styles} from '../../../utils'

class NavbarHeader extends Component {
  render() {
    const {handleNavbar} = this.props
    return (
      <HeaderWrapper><Link to="/"><img src={logo} alt="name" />
      </Link>
        <FaAlignRight className="toggle-icon"
            onClick={()=>{handleNavbar()}}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #767c89;
  .toggle-icon{
    font-size:1.75rem;
    color: ${styles.colors.mainLightBlue};
    cursor: pointer;
  }
  @media (mind-width: 768px) {
    .toggle-icon {
      display: none;
    
    }
  
  }
`
export default NavbarHeader



