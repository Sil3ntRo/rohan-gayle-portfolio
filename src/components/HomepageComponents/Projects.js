import React, {Component} from 'react'
import {Section} from '../../utils'
import Title from './Title'
import Portfolio from "./Portfolio"


export default class Projects extends Component {
  render() {
    return <Section>
      <Title title="Projects" />
      <div>
        <Portfolio />
      </div>

    </Section>
  }
}