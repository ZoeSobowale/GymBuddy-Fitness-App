import React, { useState } from 'react';
import { View , Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { nestedWorkoutStyles } from "../assets/themes";

const workouts = [
  { name: 'WorkBack', image: require('../assets/bodyparts/back.png') },
  { name: 'WorkCardio', image: require('../assets/bodyparts/cardio.png') },
  
  { name: 'WorkNeck', image: require('../assets/bodyparts/neck.png') },
  { name: 'WorkChest', image: require('../assets/bodyparts/chest.png') },

  { name: 'WorkShoulders', image: require('../assets/bodyparts/shoulders.png') },
  { name: 'WorkWaist', image: require('../assets/bodyparts/waist.png') },

  { name: 'WorkLowerArms', image: require('../assets/bodyparts/lower-arms.png') },
  { name: 'WorkUpperArms', image: require('../assets/bodyparts/upper-arms.png') },

  { name: 'WorkUpperLegs', image: require('../assets/bodyparts/upper-legs.png') },
  { name: 'WorkLowerLegs', image: require('../assets/bodyparts/lower-legs.png') },
];

const WorkoutScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkouts = workouts.filter(
    (workout) => workout.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  );

  return (
    <View style={nestedWorkoutStyles.container} screenOptions={{ headerShown: false }}>
      <View style={nestedWorkoutStyles.searchContainer}>
        <TextInput
          style={nestedWorkoutStyles.searchInput}
          placeholder="Search BodyPart"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <ScrollView contentContainerStyle={nestedWorkoutStyles.workoutsContainer}>
         {filteredWorkouts.map((workout) => (
          <TouchableOpacity
            key={workout.name}
            onPress={() => navigation.navigate(workout.name)}
            style={nestedWorkoutStyles.workout}
            activeOpacity={0.5}
          >
            <Image source={workout.image} style={nestedWorkoutStyles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};


export default WorkoutScreen;

