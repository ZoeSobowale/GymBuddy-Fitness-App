import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserContext } from './UserContext';
import { exerciseDetailsStyles, STYLES } from '../assets/themes';

const ExerciseDetailsScreen = ({ route }) => {
  const { exercise } = route.params;
  const { userData, setUserData } = useContext(UserContext);

  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [ setsDone, setSetsDone] = useState(0);

//handles the timer going down using timer variable
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {setTimer((prevTimer) => prevTimer - 1);}, 1000); //1000ms = 1s
    } 
    else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    }, [isRunning, timer]
  );


  // setting the timer icon 
  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  //increase sets done in UserContext 4 sets = 1 exercise, 2 exercises = 1 workout
  const incrementSetsDone = () => {
    const newSetsDone = setsDone + 1;

    if (newSetsDone % 4 === 0) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        exercisesDone: prevUserData.exercisesDone + 1,
      }));

      if ((userData.exercisesDone+1) >= 4){
        if ((userData.exercisesDone+1) % 2 === 0) {
          setUserData((prevUserData) => ({
            ...prevUserData,
            workoutsDone: prevUserData.workoutsDone + 1,
          }));
        }
      } 
    }
    setSetsDone(newSetsDone);
  };

  return (
    <View style={exerciseDetailsStyles.container}>
      <Image
        source={{ uri: exercise.gifUrl }}
        style={{ width: '100%', height: 300 }}
        resizeMode="contain"
      />

      <View style={exerciseDetailsStyles.timerContainer}>
        <Text style={exerciseDetailsStyles.timer}>{timer}s</Text>
        <TouchableOpacity style={exerciseDetailsStyles.toggleButton} onPress={toggleTimer}>
          <Icon name={isRunning ? 'pause' : 'play-arrow'} size={30} color="#FFF" />
        </TouchableOpacity>
      </View>

      <Text style={STYLES.text}> {exercise.name.toString().toUpperCase()}</Text>
      <Text style={exerciseDetailsStyles.detail}>Body Part: {exercise.bodyPart}</Text>
      <Text style={exerciseDetailsStyles.detail}>Equipment: {exercise.equipment}</Text>
      <Text style={exerciseDetailsStyles.detail}>Target: {exercise.target}</Text>

      <TouchableOpacity style={STYLES.button} onPress={incrementSetsDone}>
        <Text style={STYLES.buttonText}>End Set</Text>
      </TouchableOpacity>

      <Text style={STYLES.text}>
        Sets Done: {setsDone}
      </Text>
      <Text style={STYLES.text}>
        Exercises Done: {userData.exercisesDone}
      </Text>
       </View>
  );
};



export default ExerciseDetailsScreen;
