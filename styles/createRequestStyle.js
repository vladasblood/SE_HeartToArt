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
        paddingBottom: 40,
        // marginBottom: 10,
        justifyContent: 'center',
        // borderBottomColor: '#c1c1c1'
    },

    smallTitle: {
        fontWeight: '700',
        fontSize: 13,
        paddingTop: 30,
    },

    descStyle: {
        fontSize: 11,
        fontWeight: '500',
        color: '#4f4f4f',
        // borderBottomWidth: 0.5,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        // borderColor: '#adadad',
        backgroundColor: '#f6f6f6',
        alignContent: 'flex-start',
        textAlignVertical: 'top',
        padding: 10,
    },
    
    dropdownContainer: {
        marginTop: 10,
        // height: 50,
    },

    dateContainer: {
        flexDirection: 'row',
        borderColor: '#4f4f4f',
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: '#f1f1f1'
    },

    dateStyle: {
        fontSize: 12,
        paddingBottom: 50,
    },

    dropdownText: {
        fontSize: 13,
    },

    
    acceptContainer: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        // paddingTop: 6,
        paddingBottom: 16,
        borderTopWidth: 1,
        borderTopColor: '#c1c1c1',
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
})

export { styles }