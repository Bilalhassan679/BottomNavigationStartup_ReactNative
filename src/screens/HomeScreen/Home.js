import { StyleSheet, Text ,TouchableOpacity, View } from 'react-native'
import React,{useState,useCallback} from 'react'
import { styles } from './style'
import ModalComponent from '../../Components/ModalComponent'
import UseCallBack from '../../ExampleHooks/UseCallBack'

const Home = () => {
  const [count,setCount]=useState(0);
  const handleIncreament=useCallback(()=>{
     console.log('HandleCallBack');
  },[])

  return (
    <>
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      {/* <ModalComponent/> */}
      <UseCallBack todo={handleIncreament}/>

      <Text>{count}</Text>
      <TouchableOpacity onPress={()=>setCount(count+1)}>
      <Text onP>
        Increament
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setCount(count-1)}>
      <Text>
        decrement
      </Text>
      </TouchableOpacity>
    </View>

    </>

  )
}

export default Home
