import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: '15%',
      backgroundColor: '#eff0f1',
  },
  input: {
      backgroundColor: '#f1f1f1',
      paddingVertical: '2%',
      borderRadius: 10, 
      marginTop: '2%',
      marginHorizontal: 0,
      marginBottom: '2%',
      paddingHorizontal: 10,
      fontWeight: '500',
  },
  backImage: {
    width: '100%',
    height: 340,
    position: 'absolute',
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  inlineTextButton: {
      color: "red",
  },
  pressedInlineTextButton: {
      color: "red",
      opacity: 0.5,
  },
  componentContainer: {
      width: 250,
      backgroundColor: 'white',
      alignSelf: 'center',
      paddingVertical: 10,
      flexGrow: 1,
  },
  loginLogoImage: {
      maxWidth: '0%',
      maxHeight: '9%',
      marginTop: '10%',
  },
  headingContainer: {
      color: '#242424',
      textAlign: 'left',
      fontWeight: '800',
      fontSize: 17,
      paddingRight: '10%',
      paddingLeft: '8%',
      marginBottom: '10%',
  },
  title: {
      color: '#0364cd',
      textAlign: 'left',
      fontWeight: '800',
      fontSize: 30,
      marginBottom: '3%',
      alignSelf: 'center'
  },
  button: {
      backgroundColor: '#053dc4',
      width: '54%',
      paddingVertical: '2%',
      borderRadius: 100,
      alignItem: 'center',
      marginTop: '7%',
      alignSelf: 'center',
  },
  buttonText: {
      textAlign: 'center',
      fontWeight: '800',
      color: 'white',
      paddingVertical: '2%',
      paddingHorizontal: '23%',
      fontSize: 16,
  },
  heading: {
      color: '#ffffff',
      textAlign: 'left',
      fontWeight: '800',
      fontSize: 25,
      paddingRight: '10%',
      paddingTop: '13%',
  },
  labels: {
      color: '#EEEEEE',
      marginTop: '5%',
      fontWeight: '400',
  },
  forgotPassText: {
      color: '#a4a4a4',
      marginRight: '40%',
      fontSize: 14,
  },
  backButtonContainer: {
      alignSelf: 'flex-start',
      marginLeft: '2%'
  },
  noAccountContainer: {
      marginTop: '3%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '9%'
  },
  noAccountText: {
      color: '#4f4f4f'
  },
  noAccountText: {
    color: '#4f4f4f'
  },
  smallSignUp: {
    color: '#053dc4',
    fontWeight: '700',

  },
  inputSignUp: {
    backgroundColor: '#f1f1f1',
    paddingVertical: '2%',
    // paddingHorizontal: '38%',
    borderRadius: 10, 
    marginVertical: '2%',
    paddingHorizontal: 10,
    fontWeight: '500',
  },

  dropdownText: {
    
  },

  dropdownSelected: {
    backgroundColor: '#f1f1f1',
    borderWidth: 0,
  },

  dropdownCont: {
    zIndex: 1,
    marginTop: 5,
  },

})