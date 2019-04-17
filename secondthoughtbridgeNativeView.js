//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const secondthoughtbridge = requireNativeComponent('secondthoughtbridge', secondthoughtbridgeView)

export default class secondthoughtbridgeView extends Component {
  render () {
    return <secondthoughtbridge {...this.props} />
  }
}

secondthoughtbridgeView.propTypes = {
  exampleProp: React.PropTypes.any
}
