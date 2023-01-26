
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    borderRadius: 9,
  },

  uppermostBar: {
    height: 45,
    backgroundColor: '#2A4267',
  },

  requestContainer: {
    flexDirection: 'row',   
    width: '100%',
    height: 220,
    backgroundColor: 'white',
    borderBottomColor: '#C1C1C1',
    paddingTop: 25,
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

  artStyle: {
    borderRadius: 20,
    //borderColor: '#B8B8B8',
    //borderWidth: 1,
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

  clientName: {
    color: '#3C3C3C',
    fontWeight: '900',
  },

  reqDesc: {
    flex: 1,
    fontSize: 12,
    fontWeight: '400',
  },

  viewButton: {
    borderRadius: 20,
    borderColor: '#3264AF',
    borderWidth: 2,
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 30,
    marginVertical: 10 ,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },

  viewButtonText: {
    color: '#3264AF',
    fontWeight: '900',
  },

  downBar: {
    width: '100%',
    height: 50,
    
  },
   
});

export { styles }