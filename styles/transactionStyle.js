
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    fontFamily: '',
    width: '100%',
    height: '100%',
    backgroundColor: '#f1f1f1',
    alignSelf: 'center',
    borderRadius: 9
  },

  uppermostBar: {
    height: 45,
    backgroundColor: '#0364cd',
  },

  upBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#0364cd',
    paddingHorizontal: 10,
  },

  requestContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderBottomColor: '#C1C1C1',
    paddingTop: 50,
    paddingHorizontal: 15,
    paddingBottom: 9,
    // borderBottomWidth: 1,
    marginBottom: 10,
  },

  smallContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderBottomColor: '#C1C1C1',
    paddingVertical: 15,
    paddingHorizontal: 15,
    // borderBottomWidth: 1,
  },

  smallTitle: {
    fontWeight: '900',
    color: '#444444',
    fontSize: 13,
  },

  photoContainer: {
    flex: 0.2,
  },

  profilePhoto: {
    flex: 1,
    maxHeight: 50,
    maxWidth: 50,
    borderRadius: 50,
  },

  requests: {
    flex: 0.9,
    flexDirection: 'column',
    paddingRight: 10,
  },

  clientName: {
    color: '#4F4F4F',
    fontWeight: '900',
  },

  artStyle: {
    borderRadius: 20,
    backgroundColor: '#A6A6A6',
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginVertical: 10 ,
  },

  artStyleText: {
    fontWeight: '900',
    color: '#FFFFFF',
    fontSize: 10.5,
  },

  reqDesc: {
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 5,
    paddingBottom: 10,
  },

  dateContainer: {
    flexDirection: 'row',
  },

  targ: {
    fontWeight: '900',
    color: '#444444',
    fontSize: 12,
  },

  smallTextStyle: {
    fontSize: 12,
  },

  acceptContainer: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingTop: 6,
    paddingBottom: 16,
  },

  acceptText: {
    marginTop: 15,
    fontSize: 13,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#4F4F4F',
  },

  requestButton: {
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 14,
    marginTop: 15,
    backgroundColor: '#053dc4',
  },

  requestButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: 'white',
  },

  buttonText: {
    fontSize: 13,
    color: 'white',
    fontWeight: '900',
    paddingHorizontal: 50,
    paddingVertical: 14,
    alignSelf: 'center',
    backgroundColor: '#053dc4',
    borderRadius: 10,
    marginTop: 30,
  },

});

export { styles }