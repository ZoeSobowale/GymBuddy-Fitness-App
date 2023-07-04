import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { STYLES } from '../assets/themes';

const ExerciseList = ({ exercises, selectedOptions }) => {
    const navigation = useNavigation();
    const handleButtonClick = (exercise) => {
        navigation.navigate('ExerciseDetails', { exercise });
      };

  const filteredExercises = exercises.filter(
    (exercise) => selectedOptions.includes(exercise.equipment)
  );


  const shuffledExercises = filteredExercises.sort(() => Math.random() - 0.5);
  
  // Select the first four exercises from the shuffled array
  const selectedExercises = shuffledExercises.slice(0, 4);

  return (
    <View>
    <View >
      {selectedExercises.map((exercise) => (
        <TouchableOpacity
          key={exercise.id}
          // title={exercise.name}
          onPress={() => handleButtonClick(exercise)}
          style={STYLES.button}
        >
        <Text style={STYLES.buttonText}>{exercise.name}</Text>
      </TouchableOpacity>
      ))}
    </View>
    </View>
  );
};

export default ExerciseList;
