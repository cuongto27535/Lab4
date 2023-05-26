import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Flatlist1 from './Flatlist1';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import chitiet from './chitiet';

const Stack = createStackNavigator();


export default function App() {
  return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen options={{headerShown:false}} name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name='Flatlist1' component={Flatlist1}></Stack.Screen>
      <Stack.Screen name='chitiet' component={chitiet}></Stack.Screen>
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
