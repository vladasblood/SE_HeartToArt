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
        height: 40,
        backgroundColor: '#0364cd',
      },
    
    upBar: {
        width: '100%',
        height: 45,
        backgroundColor: '#0364cd',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },

    backButton: {
        flex: 0.2,
    },

    titleContainer: {
        flex: 0.6,
    },
    
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
        alignSelf: 'center',
        paddingTop: 2.5,
    },
    
    container: {
        // paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        paddingTop: 30,
        justifyContent: 'center',
    },

    imageBorder: {
        borderRadius: 100,
    },

    iconContainer: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        top: 40,
        borderRadius: 50,
        padding: 7,
        opacity: 0.9
    },

    photoIcon: {
        alignSelf: 'center',
    },

    photoContainer: {
        justifyContent: 'center',
    },

    profilePhoto: {
        borderRadius: 60,
        height: 120,
        width: 120,
        alignSelf: 'center',
        overflow: 'hidden',
        marginVertical: 30,
    },

    imageOpacity: {
        opacity: 0.7,
    },

    smallTitle: {
        fontWeight: '700',
        fontSize: 13,
    },

    input: {
        fontSize: 11,
        fontWeight: '500',
        color: '#4f4f4f',
        borderBottomWidth: 0.5,
        marginBottom: 30,
    },

    sideBySide: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'stretch',
        alignContent: 'center',
        marginBottom: 15
    }, 

    pricings: {
        flex: 1,
        alignItems: 'stretch',        
    },

    pricesInput: {
        fontSize: 11,
        fontWeight: '500',
        color: '#4f4f4f',
        borderBottomWidth: 0.5,
        marginBottom: 5,
        marginLeft: 5,
        width: '50%',
        
    },

    pricesDesc: {
        fontSize: 11,
        fontWeight: '500',
        color: '#4f4f4f',
        // borderBottomWidth: 0.5,
        marginBottom: 5,
        marginLeft: 5,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#adadad',
        backgroundColor: '#f6f6f6',
        alignContent: 'flex-start',
        textAlignVertical: 'top',
        padding: 10,
    },

    pricePhotos: {
        height: 84.38,
        width: 150,
        alignSelf: 'center',
        marginRight: '3%',
        borderRadius: 5,
    },
    
    dropdownContainer: {
        marginTop: 10,
    },

    dropdownText: {
        fontSize: 13,
    },

    saveChangesStyle: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#053dc4',
        borderRadius: 5,
        marginHorizontal: '5%',
        marginVertical: 15,
        
    },

    saveTextStyle: {
        textAlignVertical: 'center',
        alignSelf: 'center',
        color: '#f1f1f1',
        fontWeight: '900'
    },

    saveContainer: {
        backgroundColor: 'white',
        marginBottom: 10,
    },

})

export { styles }