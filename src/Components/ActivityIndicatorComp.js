import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

const ActivityIndicatorComp = (props) => {
  return (
    <View>
      <ActivityIndicator size={props.size} color={props.color} />
    </View>
  )
}

export default ActivityIndicatorComp

