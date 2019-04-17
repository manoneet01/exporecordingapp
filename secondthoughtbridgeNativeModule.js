//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { secondthoughtbridge } = NativeModules

export default {
  exampleMethod () {
    return secondthoughtbridge.exampleMethod()
  },

  EXAMPLE_CONSTANT: secondthoughtbridge.EXAMPLE_CONSTANT
}
