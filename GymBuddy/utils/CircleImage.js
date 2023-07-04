import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

//uri from string
const CircleImage = ({ imageUri }) => {
  const source = typeof imageUri === 'string' ? { uri: imageUri } : imageUri;

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 75, //Half of width and height to create a circle
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CircleImage;
