import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const chitiet = (props) => {
    const {navigation,route} = props;
    const {params} =route;
  return (
    <View>
      <Text>{params.object.id}</Text>
      <Text>{params.object.title}</Text>
      <Text>{params.object.content}</Text>
      <Text>{params.object.URL}</Text>
    </View>
  )
}

export default chitiet

const styles = StyleSheet.create({})