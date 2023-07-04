import React, { useContext ,useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import { View, Text, TextInput, Button, Image, TouchableOpacity, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { editUserStyles } from "../../assets/themes";


const CreateUserScreen = ({navigation}) => {
  const { userData, setUserData } = useContext(UserContext);

  // get profilepic from userData
  const userprofilePicture = userData.profilePicture;
  const [profilePicture, setProfilePicture] = useState(userprofilePicture);

  //update userdata when called
  const handleUserDataChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    //if not cancelled update profile picture
    if (!result.cancelled) {
      handleUserDataChange('profilePicture', result.uri);
      setProfilePicture(result);
    }
  };


  const handleButtonPress = () => {
    setUserData(userData);
    navigation.navigate('UserScreen');
  };


//creating welcome message
  let welcomeMessage = '';
  if (userData.username) {
    welcomeMessage = `Welcome, ${userData.username}!`;
  } else {
    welcomeMessage = 'Welcome User';
  }

  return (
    <View style={editUserStyles.container}>
      <Text>{welcomeMessage}</Text>
      <View style={editUserStyles.formGroup}>
        <Text style={editUserStyles.label}>Username:</Text>
        <TextInput
          style={editUserStyles.input}
          onChangeText={(value) => handleUserDataChange('username', value)}
          value={userData.username}
          placeholder="Enter your username"
        />
      </View>

      <View style={editUserStyles.formGroup}>
        <Text style={editUserStyles.label}>Workouts per day:</Text>
        <TextInput
          style={editUserStyles.input}
          onChangeText={(value) =>
            handleUserDataChange('workoutsPerDay', value)
          }
          value={userData.workoutsPerDay}
          placeholder="Enter number of workouts per day"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={editUserStyles.profilePictureButton}
        onPress={pickImage}
      >
        <Image
          source={{ uri: profilePicture.uri }}
          style={editUserStyles.profilePicture}
          resizeMode="cover"
        />
        <Text style={editUserStyles.profilePictureButtonText}>
          Change Profile Picture
        </Text>
      </TouchableOpacity>

      <Button
        title="Create User"
        onPress={handleButtonPress}//{() => navigation.navigate('UserScreen', userData)}
        disabled={!userData.username || !userData.workoutsPerDay} //only active if variables not empty
      />
    </View>
  );
};

export default CreateUserScreen;
