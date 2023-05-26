import { FlatList, StyleSheet, Text, View,Image ,TouchableOpacity, Button } from 'react-native'
import React from 'react'
const onclick =(item,navigation) =>{
    console.log(item.title);
    navigation.navigate('chitiet',{object: item});//truyền dữ liệu sang màn hình khác

};
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      content:'cccccc',
      URL:'./Image/l1.png',

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      content:'cccccc',
      URL:'./Image/l1.png',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      content:'cccccc',
      URL:'./Image/l1.png',
    },
  ];

const Flatlist1 = (props) => {
  const {navigation} = props
  
  return (
    <View>
        <Text>List new</Text>
      <FlatList 
      data={DATA}
      
      renderItem={({item}) => (<TouchableOpacity onPress={()=>onclick(item,navigation)} style={{backgroundColor:'red',
      marginBottom:3,
      flexDirection:"row",}}>
        <Image
        style={{width:80,height:80}}
        source={require('./Image/l1.png')}>

        </Image>
           <View style={{flexDirection:"column",}}>
           <Text style={{fontWeight:'bold',}}>{item.title}</Text>
          <Text>{item.content}</Text>
           </View>
         
          
          </TouchableOpacity>
          )}   keyExtractor={(object) => object.id}>
          
        
      </FlatList>
      <Button title='Back' onPress={navigation.goBack}></Button>
    </View>
  )
}

export default Flatlist1

const styles = StyleSheet.create({})
