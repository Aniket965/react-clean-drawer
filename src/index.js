import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Drawer extends Component {

  render () {
    return (
      <div className={`rcd-drawer ${this.props.open ? 'rcd-drawer-open' : ''} ${this.props.open === false ? 'rcd-close':''} `}>
        {this.props.children}
      </div>
    )
  }
}

Drawer.propTypes =  {
  open: PropTypes.bool.isRequired,
}