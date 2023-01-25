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
    paddingLeft: '3%',
    fontWeight: '500',
  },
  backImage: {
    width: '100%',
    height: '110%',
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
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    marginBottom: '0%',
    alignSelf: 'center',
    flexGrow: 1,
    marginTop: '0%',
  },
  loginLogoImage: {
    maxWidth: '13%',
    maxHeight: '16%',
    marginTop: '10%',
  },
  headingContainer: {
    color: '#242424',
    textAlign: 'left',
    fontWeight: '800',
    fontSize: 17,
    paddingRight: '10%',
    paddingLeft: '8%',
  },
  title: {
    color: 'white',
    textAlign: 'left',
    fontWeight: '800',
    fontSize: 25,
    marginTop: '10%',
    marginBottom: '0%',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#ededed',
    paddingVertical: '2%',
    borderRadius: 50,
    paddingHorizontal: '25%',
    marginTop: '6%',
    marginBottom: '2%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#0364cd',
    paddingVertical: '2%',
    fontSize: 16,
  },
  heading: {
    color: 'white',
    fontWeight: '800',
    fontSize: 17,
    paddingRight: '20%',
    marginBottom: '5%',
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
  noAccountContainer: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '9%'

  },
  componentContainer: {
    width: '100%',
    height: '41%',
    backgroundColor: 'rgba(1,3,58,0.4)',
    alignSelf: 'center',
    marginTop: '4%',
    paddingVertical: '8%',
    paddingHorizontal: '8%',
    borderRadius: 20,
  },
  userTypeContainer: {
    flexDirection: 'row',
    width: '10%',
    marginTop: '10%',
  },
  userTypeButton: {
    backgroundColor: '#ededed',
    paddingVertical: '2%',
    borderRadius: 50,
    paddingHorizontal: '25%',
    marginTop: '5%',

  },
  userButtonText: {

  }

})
