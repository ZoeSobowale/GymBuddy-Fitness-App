import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeScreens/HomeScreen";
import ExerciseDetailsScreen from '../utils/ExerciseDetailsScreen.js';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>  
       <Stack.Screen
        name="Homescreen"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
 );
}

 export {HomeScreenNavigator};