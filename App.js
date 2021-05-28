import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";


const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED"},
  headerTitleStyle: {color: "white"},
  headetTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions} >
      <Stack.Screen name="Login" component={LoginScreen} />


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
