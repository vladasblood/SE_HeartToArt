
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    fontFamily: '',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    borderRadius: 9
  },

  uppermostBar: {
    height: 45,
    backgroundColor: '#2A4267',
  },

  upBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#2A4267',
    paddingHorizontal: 10,
  },

  backButton: {
    width: 30, 
    height: 30
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
    borderBottomWidth: 1,
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
    color: '#3C3C3C',
    fontWeight: '900',
  },

  artStyle: {
    borderRadius: 20,
    borderColor: '#606060',
    borderWidth: 1.5,
    backgroundColor: '#F9F9F9',
    paddingVertical: 6,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },

  artStyleText: {
    fontWeight: '900',
    color: '#444444',
    fontSize: 12,
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

  dateStyle: {
    fontSize: 12,
    paddingBottom: 50,
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
  },

  requestButton: {
    alignSelf: 'center',
    borderRadius: 30,
    paddingHorizontal: 50,
    paddingVertical: 14,
    marginTop: 15,
    backgroundColor: '#3264AF',
  },

  requestButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: 'white',
  },

  naviBar: {
    width: '100%',
    height: '5%',
    backgroundColor: '#2A4267',
  },

});

export { styles }