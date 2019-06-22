import React, { Component } from "react"
import styled from 'styled-components'
import {styles} from '../utils'

import Layout from '../components/layout'
import Profile from '../images/Profile.jpg'
import Projects from "../components/HomepageComponents/Projects"

export default class AboutPage extends Component {
  render() {
    return (

        <AboutWrapper className="row">

          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <img src={Profile} alt="headshot" />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <p>Hi, i'm Rohan, and i'm a software support analyst and part time grad student living in Tampa, Florida. </p>
            <h4>Background</h4>
            <p>
              In college, I studied Management Information Systems. After graduating, most of my experience
              was either geared towards back office financial operations or supporting risk management software.

              Currently, I am enrolled as a remote student in the software engineering graduate program provided by Arizona State University.
              Previously, I took a number of computer science and mathematics courses that would be comparable to a minor in computer science that
            has increased my foundational knowledge.
          </p>
          <h4>Looking Towards the future</h4>
            <p>
              In my free time, I attend conferences/meetups, listen to software engineering podcasts,
              read various tech blogs, and take other online courses in order to help me
              become a better software engineer.
            </p>
          </div>
        </AboutWrapper>

    )
  }
}

const AboutWrapper = styled.div`
  img {
    display: block;
    margin: 1rem 0.5rem 1rem 0.5rem;
    margin-left: 2.5%;
    height: 384px;
    width: 380px;
 
  }
  
 div->p {
    text-align: right;
    text-align: center;
  }

`