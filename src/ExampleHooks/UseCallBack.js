import { StyleSheet, Text, View } from 'react-native'
import React,{memo} from 'react'

const UseCallBack = (props) => {
  console.log('useCallBack')
  return (
    <View>
      <Text>{props.todo}</Text>
      <Text>UseCallBack</Text>
    </View>
  )
}

export default memo(UseCallBack)
