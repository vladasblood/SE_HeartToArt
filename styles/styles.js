import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    
    rowContainer: {
        flexDirection: 'row',
        alignItem: 'center', 
        justifyContent: 'center',
        alignSelf: "stretch",
        marginVertical: 4,
    },

    inputContainer: {
        width: '80%',
    },

    errorText: {
        color: "#ff0000",
    },

    input: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItem: 'center',

    },

    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,

    },
    
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },

    inlineTextButton: {
        color: "red",
    },
    pressedInlineTextButton: {
        color: "red",
        opacity: 0.5
    }    
})