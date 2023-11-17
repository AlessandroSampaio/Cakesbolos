import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/Pages/Login";
import HomeScreen from "./src/Pages/Home";
import GalleryScreen from "./src/Pages/Gallery";
import RecipeScreen from "./src/Pages/Recipe";
import { Dimensions } from "react-native";
import SignUpScreen from "./src/Pages/SignUp";



const window = Dimensions.get('window');

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="Recipe" component={RecipeScreen} />          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }