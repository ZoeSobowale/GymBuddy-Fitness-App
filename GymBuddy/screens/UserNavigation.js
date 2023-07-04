import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';

import CreateUserScreen from "./UserScreens/EditUser";
import UserScreen from "./NestedUser";
import EquipmentScreen from "./UserScreens/SelectEquipment";


const Stack = createStackNavigator();


const UserScreenNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShown: false}}>   

      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
      />

      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
      />

      <Stack.Screen
        name="EquipmentScreen"
        component={EquipmentScreen}
      />
    </Stack.Navigator>
 );
}

 export {UserScreenNavigator};