import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from "./assets/themes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { WorkoutScreenNavigator } from './screens/WorkoutNavigation';
import { HomeScreenNavigator } from './screens/HomeNavigation';
import { UserScreenNavigator } from './screens/UserNavigation';

import { UserProvider } from './utils/UserContext';



const Tab = createBottomTabNavigator();

//NOTE TO SELF: 4 sets = 1 exercise, 2 exercises = 1 workout

//makes logo for header
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/Logo.png')}
    />
  );
}

function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="User" // Set UserScreen as initial screen
          screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: COLORS.tertiary },
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            //Set iconSource from routename in tabs
            if (route.name === 'Home') {
              iconSource = require('./assets/Icons/tab/home.png');
            } 
            else if (route.name === 'Workouts') {
              iconSource = require('./assets/Icons/tab/kettlebell.png');
            } 
            else if (route.name === 'User') {
              iconSource = require('./assets/Icons/tab/user-fill.png');
            }

            return <Image source={iconSource} style={{ width: 35, height: 35, tintColor: focused ? COLORS.primary : COLORS.secondary }} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreenNavigator} />
        <Tab.Screen name="Workouts" component={WorkoutScreenNavigator} />
        <Tab.Screen name="User" component={UserScreenNavigator}/>
      </Tab.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}

export default App;
