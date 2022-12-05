import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const SwitchComponent = (props) => {

  return (
    <Switch
    onValueChange={props?.onValueChange}
    value={props?.value}
    thumbColor={props?.value?'white':'blue'}
    trackColor={{false:'white',true:"red"}}
    ios_backgroundColor='grey'
    />
  )
}

export default SwitchComponent

const styles = StyleSheet.create({})