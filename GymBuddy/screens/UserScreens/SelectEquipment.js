import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { COLORS, SIZES, STYLES} from "../../assets/themes";
import { UserContext } from '../../utils/UserContext';

const EquipmentScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [dataEXE, setDataEXE] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {fetchData()}, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
        {
          headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key':'5f8605baebmshba3b28037768980p152838jsna5d68ec31d67',
          },
        }
      );
      const data = await response.json();
      setData(data);
      const responseEXE = await fetch(
        'https://exercisedb.p.rapidapi.com/exercises',
        {
          headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key':'5f8605baebmshba3b28037768980p152838jsna5d68ec31d67',
          },
        }
      );
      const dataEXE = await responseEXE.json();
      setDataEXE(dataEXE);    
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionPress = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const renderOption = (item) => {
    const isSelected = selectedOptions.includes(item);

    return (
      <TouchableOpacity
        key={item}
        onPress={() => handleOptionPress(item)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: isSelected ? 'green' : 'gray',
            marginRight: 10,
          }}
        />
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  const handleSubmit = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      selectedOptions: selectedOptions,
    }));
    const filteredExercises = dataEXE.filter((exercise) => selectedOptions.includes(exercise.equipment));

    const shuffledExercises = filteredExercises.sort(() => Math.random() - 0.5);
  
    // Select the first four exercises from the shuffled array
    // 2 full exercises is one workout
    const setExercises = shuffledExercises.slice(0, (userData.workoutsPerDay*2));

    setUserData({ ...userData, userWorkout: setExercises });
    
    console.log(setExercises);
    navigation.navigate('UserScreen');
  };

  return (
    <View>
      <Text>Selected options: {JSON.stringify(selectedOptions)}</Text>
      <View style={STYLES.buttonsContainer}>
        <TouchableOpacity
          style={STYLES.button}
          onPress={handleSubmit}
        >
          <Text style={STYLES.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {data.map(renderOption)}
      </ScrollView>
    </View>
  );
};

export default EquipmentScreen;