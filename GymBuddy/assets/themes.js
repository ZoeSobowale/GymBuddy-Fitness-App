import { StyleSheet } from 'react-native';

const COLORS = {
    primary: "#5b97af",
    secondary: "#14314b",
    tertiary: "#f3f6f4",
  
    gray: "#83829A",
    gray2: "#C1C0C8",
  
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
    black: '#000105',
  };
  
  const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  };
  
  const STYLES = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilePictureContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profilePicture: {
      width: '33%',
      height: undefined,
      aspectRatio: 1,
      borderRadius: 9999,
      borderWidth: 2,
      borderColor: '#007AFF',
    },
    username: {
      marginTop: 10,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    workoutsPerDayContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    value: {
      fontSize: 16,
      color: '#444',
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    button: {
      flex: 1,
      marginHorizontal: 10,
      marginBottom: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#007AFF',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      color: '#FFF',
      fontWeight: 'bold',
    },
    space: {
      marginVertical: 10,
    },

  });


const editUserStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  profilePictureButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profilePictureButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

const exerciseDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    marginRight: 20,
  },
  toggleButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detail: {
    fontSize: 13,
    marginVertical: 2,
  },
});

const nestedWorkoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.lightWhite,
  },
  workoutsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  workout: {
    alignItems: 'center',
    width: '45%',
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    height: 50,
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  screen:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000025',
  },
  text:{
      color:'#000',
      fontWeight:'700',
      fontSize:30
  },
  button:{
      backgroundColor:'#0275d8',
      paddingVertical: 5,
      paddingHorizontal: 10
      
  },
  buttonText:{
      flex:.8,
      marginBottom: 0,
      marginLeft: 10,
      color:COLORS.black
  }
});

  export { COLORS, SIZES, STYLES, editUserStyles, exerciseDetailsStyles, nestedWorkoutStyles };
  