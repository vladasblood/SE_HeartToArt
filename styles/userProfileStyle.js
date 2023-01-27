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
    
    userContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 5,
        paddingRight: 15,
        backgroundColor: 'white',
        borderBottomColor: '#C1C1C1',
        borderBottomWidth: 1,
        maxWidth: 'auto',

    },

    userLeftContainer: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 15,
    },

    profilePhotoStyle: {
        borderRadius: 45,
        height: 90,
        width: 90
    },

    userRightContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 10,
        paddingTop: 5,
        paddingLeft: 0,
        paddingRight: 5,
    },

    rightTopContainer: {
        flexDirection: 'row',
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

    nameAndStyleContainer: {
        flexDirection: 'column',
        
    },

    usernameText: {
        fontWeight: '700',
    },

    emailText: {
        fontSize: 11,
    },

    manageContainer: {
        right: 0,
        position: 'absolute',
    },

    manageAcc: {
        backgroundColor: '#053dc4',
        borderRadius: 5,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 7.5,
        marginVertical: 15,
        alignContent: 'center',
        justifyContent: 'center',
    },

    manageText: {
        fontWeight: '700',
        fontSize: 13,
        color: 'white',
    },

    bioText: {
        fontSize: 11,
        textAlign: 'justify',
    },

    pricingsOuter: {
        flexDirection: 'column',
        borderColor: '#C1C1C1',
        borderBottomWidth: 1,
    },

    pricingsContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 25,
        flexDirection: 'row',
        flex: 1,
    },

    pricingsLeftContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        justifyContent: 'center'
    },

    pricingsPhoto: {
        height: 90,
        width: 160,
    },

    pricingsRightContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        flex: 1,
    },

    pricings: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
    }, 

    pricingsDesc: {
        textAlign: 'justify',
        fontSize: 12,
    },

    downBar: {
      width: '100%',
      height: 50,
      backgroundColor: '#ffffff',
      borderBottomWidth: 1,
      borderBottomColor: '#C1C1C1'
    },

    logOutStyle: {
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#232323',
        marginHorizontal: '5%',
        marginVertical: 5,
        borderRadius: 5,
    },

    logOutTextStyle: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '900'
    },
})

export { styles }