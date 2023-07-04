import React, { createContext, useState } from 'react';
import { Image } from 'react-native';
import Logo from '../assets/Logo.png';


const exampleImageUri = Image.resolveAssetSource(Logo)

// Set the default values for userData
const defaultUserData = {
  username: '',
  workoutsPerDay: '',
  profilePicture: exampleImageUri,
  selectedOptions: ["body weight"],
  userWorkout: [{"bodyPart": "back", "equipment": "body weight", "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3293.gif", "id": "3293", "name": "archer pull up", "target": "lats"}],
  workoutsDone: 0,
  exercisesDone:0,
  setsDone: 0,
};

export const UserContext = createContext();

//create state variable userData with initial values 
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(defaultUserData);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
