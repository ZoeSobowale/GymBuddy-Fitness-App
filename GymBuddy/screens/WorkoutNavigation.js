//CustomNavigation.js

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";


import WorkBack from "./WorkoutScreens/WorkBack";
import WorkCardio from "./WorkoutScreens/WorkCardio";
import WorkChest from "./WorkoutScreens/WorkChest";
import WorkLowerArms from "./WorkoutScreens/WorkLowerArms";
import WorkLowerLegs from "./WorkoutScreens/WorkLowerLegs";
import WorkNeck from "./WorkoutScreens/WorkNeck";
import WorkShoulders from "./WorkoutScreens/WorkShoulders";
import WorkUpperArms from "./WorkoutScreens/WorkUpperArms";
import WorkUpperLegs from "./WorkoutScreens/WorkUpperLegs";
import WorkWaist from "./WorkoutScreens/WorkWaist";

import ExerciseList from '../utils/ExerciseList';
import ExerciseDetailsScreen from '../utils/ExerciseDetailsScreen.js';

import WorkoutScreen from "./NestedWorkout";


const Stack = createStackNavigator();

const WorkoutScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>  
       <Stack.Screen
        name="WorkoutsMain"
        component={WorkoutScreen}
      />
       <Stack.Screen
        name="WorkBack"
        component={WorkBack}
      />
      <Stack.Screen
        name="WorkCardio"
        component={WorkCardio}
      />
      <Stack.Screen
        name="WorkLowerArms"
        component={WorkLowerArms}
      />
      <Stack.Screen
        name="WorkChest"
        component={WorkChest}
      />

      <Stack.Screen
        name="WorkLowerLegs"
        component={WorkLowerLegs}
      />
      <Stack.Screen
        name="WorkNeck"
        component={WorkNeck}
      />
      <Stack.Screen
        name="WorkShoulders"
        component={WorkShoulders}
      />
      <Stack.Screen
        name="WorkUpperArms"
        component={WorkUpperArms}
      />
      <Stack.Screen
        name="WorkUpperLegs"
        component={WorkUpperLegs}
      />
      <Stack.Screen
        name="WorkWaist"
        component={WorkWaist}
      />
      <Stack.Screen
          name="ExerciseList"
          component={ExerciseList}
          options={{ title: 'Exercise List' , headerShown: true}}
      />
      <Stack.Screen
          name="ExerciseDetails"
          component={ExerciseDetailsScreen}
          options={{ title: '', headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export {WorkoutScreenNavigator};
