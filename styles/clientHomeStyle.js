
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F1f1f1',
    alignSelf: 'center',
    borderRadius: 9,
  },

  uppermostBar: {
    height: 45,
    backgroundColor: '#0364cd',
  },

  outerSearch: {
    borderBottomColor: '#777777', 
    borderBottomWidth: 1,
    backgroundColor: '#D9D9D9',
  },

  searchBar: {
    height: 40,
    marginHorizontal: 5,
    marginVertical: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: '#777777',
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
  },

  reqContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#C1C1C1',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },

  reqBox: {
    width: 175,
    height: 50,
    backgroundColor: 'white',
    backgroundColor: '#053dc4',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },

  reqText: {
    fontSize: 12,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'white'
  }, 
  
  currentTitleText: {
    fontWeight: '700',
  },

  searchIcon: {
    right: 0,
    position: 'absolute',
    marginHorizontal: 10,
  },


   
});

export { styles }