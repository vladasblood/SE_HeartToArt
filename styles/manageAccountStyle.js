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
        backgroundColor: '#2A4267',
      },
    
    upBar: {
        width: '100%',
        height: 45,
        backgroundColor: '#2A4267',
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
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
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
    },


})

export { styles }