import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { STYLES } from '../assets/themes';
import { UserContext } from '../utils/UserContext';
import { useNavigation } from '@react-navigation/native';
import CircleImage from '../utils/CircleImage'; // Import the CircleImage component

const UserScreen = () => {
  const navigation = useNavigation();
  const { userData } = useContext(UserContext);

  // Accessing a specific property from userData
  const username = userData.username;
  const workoutsPerDay = userData.workoutsPerDay;
  const profilePicture = userData.profilePicture;
  const workoutsDone = userData.workoutsDone;

// if username or workoutsperday not set/ still are default  
  if (!username || !workoutsPerDay) {
    return (
      <View style={STYLES.container}>
        <View>
          <Text>Add Your Details</Text>
        </View>
        <View style={STYLES.buttonsContainer}>
          <TouchableOpacity
            style={STYLES.button}
            onPress={() => navigation.navigate('CreateUserScreen')}
          >
            <Text style={STYLES.buttonText}>Create Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // if username or workoutsperday are set 
  return (
    <View style={STYLES.container}>
      <Text>PROFILE</Text>
      <CircleImage imageUri={profilePicture} />
      <Text>Hello, {username}</Text>
      <Text>{workoutsDone}/{workoutsPerDay}</Text>

      <View style={STYLES.buttonsContainer}>
        <TouchableOpacity
          style={STYLES.button}
          onPress={() => navigation.navigate('CreateUserScreen')}
        >
          <Text style={STYLES.buttonText}>Change Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={STYLES.button}
          onPress={() => navigation.navigate('EquipmentScreen')}
        >
          <Text style={STYLES.buttonText}>Edit Equipment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;
