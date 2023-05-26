import { StyleSheet, Text, TextInput, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'



const Login = (props) => {
    const {navigation} = props
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Login</Text>
      <TextInput placeholder='nhập tên' style={styles.inputName}></TextInput>
      <TextInput placeholder='nhập email' style={styles.inputName}></TextInput>
      <TouchableOpacity style={styles.buttonlogin}
      onPress={()=>navigation.navigate('Flatlist1')}>
        <Text style={{fontSize:25}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        alignItems:'center',
        flex:1,

    },
    textTitle:{
        marginTop:30,
        fontWeight:'bold',
        fontSize:30,
    },
    inputName:{
        borderWidth:1,
        height:40,
        width:300,
        borderRadius:10,
        marginTop:10,

    },
    buttonlogin:{
        marginTop:10,
        width:150,
        backgroundColor:'blue',
        height:40,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})