import { StyleSheet } from "react-native";


export default StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 30,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      color: 'white',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      height: 40,
      paddingLeft: 10,
      marginBottom: 10,
      borderRadius: 15,
    },
    loginButton: {
      backgroundColor: '#FF5733',
    },
    homeText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
      color: 'white',
    },
    galleryContainer: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    galleryTitle: {
      fontSize: 24,
      color: 'black',
      marginBottom: 20,
    },
    cakeItem: {
      alignItems: 'center',
      marginBottom: 20,
    },
    cakeImage: {
      width: 200,
      height: 150,
      resizeMode: 'cover',
    },
    cakeName: {
      fontSize: 18,
      color: 'black',
      marginTop: 10,
    },
    backButton: {
      marginTop: 100,
    },
    recipeContainer: {
      flex: 1,
    },
    recipeImage: {
      height: 250,
    },
    recipeTitle: {
      fontSize: 24,
      color: 'black',
      marginTop: 20,
      textAlign: 'center',
    },
    recipeText: {
      margin: 20,
    },
  });
  