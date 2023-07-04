import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, Button, Text, StyleSheet } from 'react-native';
import { STYLES } from "../../assets/themes";
import { UserContext } from '../../utils/UserContext';
import CircleImage from '../../utils/CircleImage';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const { userData, setUserData } = useContext(UserContext);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const username = userData.username;
  const workoutsPerDay = userData.workoutsPerDay;
  const profilePicture = userData.profilePicture;
  const workoutsDone = userData.workoutsDone;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedExercises(userData.setWorkout);
  }, [userData.setWorkout]);

  // fetching exercise data from api
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://exercisedb.p.rapidapi.com/exercises',
        {
          headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': '5f8605baebmshba3b28037768980p152838jsna5d68ec31d67',
          },
        }
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleExerciseClick = (exercise) => {
    navigation.navigate('ExerciseDetails', { exercise });
  };

  //filtering by only the equipment selected
  const filteredExercises = data.filter(
    (exercise) => userData.selectedOptions.includes(exercise.equipment)
  );
  const shuffledExercises = filteredExercises.sort(() => Math.random() - 0.5);

  //select the first 10 exercises from the shuffled array
  const randomExercises = shuffledExercises.slice(0, 10);

  if (username || workoutsPerDay) {
    return (
      <View style={STYLES.container}>
        <CircleImage imageUri={profilePicture} />
        <Text>Hello, {username}</Text>
        <Text>{workoutsDone}/{workoutsPerDay}</Text>
        <Text>Here's your Workout</Text>
        <Text>Progress toward your goals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[STYLES.buttonsContainer, styles.horizontalGap]}>
            {userData.userWorkout.map((exercise) => (
              <Button
                key={exercise.id}
                title={exercise.name}
                onPress={() => handleExerciseClick(exercise)}
                style={STYLES.button}
              />
            ))}
          </View>
        </ScrollView>
        <Text>Add equipment to get more tailored exercise</Text>
        <View style={STYLES.space} />
        <Text>New Workout</Text>
        <Text>Try these exercises out.</Text>
        <ScrollView>
          <View style={styles.verticalGap}>
            {randomExercises.map((exercise) => (
              <Button
                key={exercise.id}
                title={exercise.name}
                onPress={() => handleExerciseClick(exercise)}
                style={STYLES.button}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  horizontalGap: {
    marginHorizontal: 5,
  },
  verticalGap: {
    marginVertical: 5,
  },
});

export default Home;
