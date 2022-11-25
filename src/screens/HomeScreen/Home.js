import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import ModalComponent from '../../Components/ModalComponent'

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <ModalComponent/>
      
    </View>
  )
}

export default Home
