import React, { useEffect, useState, useContext } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { STYLES} from "../../assets/themes";
import { UserContext } from '../../utils/UserContext';
import ExerciseList from '../../utils/ExerciseList';


const WorkBack = () => {
  const [data, setData] = useState([]);
  const { userData } = useContext(UserContext);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist',
        {
          headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key':'5f8605baebmshba3b28037768980p152838jsna5d68ec31d67',
          },
        }
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const selectedOptions = userData.selectedOptions;

  const workout = {
    image: require('../../assets/bodyparts/waist.png'),
  };

  return (
    <View style={STYLES.container}>
      <Image source={workout.image} style={STYLES.image} />
      <ScrollView style={STYLES.scrollView}>
      <View style={STYLES.buttonsContainer}>
  
        <ExerciseList exercises={data} selectedOptions={selectedOptions}/>
      </View>
      </ScrollView>
    </View>
  );
};



export default WorkBack;

