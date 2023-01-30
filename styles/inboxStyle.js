
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
    backgroundColor: '#0364cd',
    justifyContent: 'center',
    paddingTop: 35
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    alignSelf: 'center'
  },

  requestContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderBottomColor: '#C1C1C1',
    paddingTop: 15,
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

  messageContainer: {
    flex: 0.9,
    flexDirection: 'column',
    paddingLeft: 12.5,
    paddingTop: 5,
    paddingRight: 20,
  },

  userName: {
    color: '#4f4f4f',
    fontWeight: '900',
  },

  messageStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#4f4f4f',
    flex: 0.5,
  },
   
});

export { styles }