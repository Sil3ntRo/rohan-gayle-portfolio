   import React, { Component } from "react"
   import styled from 'styled-components'
   import {styles} from '../../utils'

   export default class Portfolio extends Component {
      render() {
        return (
          <ProjectWrapper className="projectArea">
            <div className="Project1">
              <a href="https://www.github.com/Sil3ntRo" class="name">
                <span className="short-name">
                  greenlight - Movie App
                </span>
              </a>
              <div className="description">
                Movie web app built with React
              </div>
            </div>
          </ProjectWrapper>
        )
      }
   }

   const ProjectWrapper = styled.div`
    text-align: center;
    font-size: 25px;
    text-transform: capitalize;
    display: block;
    font-weight: normal;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Source Sans Pro';
    a {
      color: rgb(3, 102, 214);
    }
   
   `