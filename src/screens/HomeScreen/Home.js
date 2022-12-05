import { StyleSheet, Text ,TouchableOpacity, View } from 'react-native'
import React,{useState,useCallback} from 'react'
import { styles } from './style'
import ModalComponent from '../../Components/ModalComponent'
import UseCallBack from '../../ExampleHooks/UseCallBack'
import ActivityIndicatorComp from '../../Components/ActivityIndicatorComp'

const Home = () => {
    {/* ******************2CallBack************************* */}
  // const [count,setCount]=useState(0);
  // const handleIncreament=useCallback(()=>{
  //    console.log('HandleCallBack');
  // },[])
    {/* ******************2CallBack************************* */}

  return (
    <>
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      {/* <ModalComponent/> */}


    {/* ******************2CallBack************************* */}
      {/* <UseCallBack todo={handleIncreament}/> */}
      {/* <Text>{count}</Text>
      <TouchableOpacity onPress={()=>setCount(count+1)}>
      <Text >
        Increament
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setCount(count-1)}>
      <Text>
        decrement
      </Text>
      </TouchableOpacity> */}
    {/* ******************2CallBack************************ */}

    {/* ******************ActivatyIndicator************************ */}
    {/* <ActivityIndicatorComp size='small' color={'red'}/> */}
    {/* ******************ActivatyIndicator************************ */}

    </View>
    </>

  )
}

export default Home
