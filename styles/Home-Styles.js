import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    loginContainer: {
        flex: 1,
		alignItems: 'center',
		paddingTop: '30%',
		backgroundColor: '#eff0f1',
    },
    input: {
        backgroundColor: '#EEEEEE',
        paddingVertical: '1%',
        borderRadius: 4, 
        margin: '4%',
        marginHorizontal: 0,
        width: '70%',
        textAlign: 'center',
        
    },
    inlineTextButton: {
        color: "red",
    },
    pressedInlineTextButton: {
        color: "red",
        opacity: 0.5,
    },
    loginComponentContainer: {
        width: '100%',
	 	paddingBottom: '10%',
		backgroundColor: '#2a4267',
        marginBottom: '45%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 1,

    },
    loginLogoImage: {
        maxWidth: '9%',
		maxHeight: '15%',
		marginBottom: '6%',
        marginTop: '10%',

    },
    loginHeadingContainer: {
		color: '#242424',
		textAlign: 'left',
		fontWeight: '800',
		fontSize: 17,
		paddingRight: '10%',
        paddingLeft: '5%',

	},
    signUpText: {
        color: '#EEEEEE',
		textAlign: 'left',
		fontWeight: '800',
		fontSize: 17,
        marginTop: '10%',
    },
    loginButton: {
        backgroundColor: '#EEEEEE',
        width: '30%',
        paddingVertical: '2%',
        borderRadius: 50,
        alignItem: 'center',
        marginTop: '3%',
        
    },
    loginButtonText: {
        textAlign: 'center',
        fontWeight: '500',
        color: '#414141',
    },

    //===================<LoginSignupScreen Styles>=================

    container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: '40%',
		backgroundColor: '#eff0f1'
	},
	buttonContainer: {
		width: '100%',
		paddingBottom: '5%',
		paddingTop: '5%',
		backgroundColor: 'white'
	},
	button: {
        backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#2a4267',
        width: '90%',
		height: 40,
        paddingTop: '1.5%',
		margin: '2.5%',
		borderRadius: 40,
		alignSelf: 'center'
    },  
    buttonOutline: {
        backgroundColor: '#2a4267',
        borderWidth: 2,
		paddingTop: '1.5%',
    },
    buttonText: {
        color: '#2a4267',
        fontWeight: '700',
        fontSize: 16,
		alignSelf: 'center',
		margin: 0,
    },
    buttonOutlineText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
		alignSelf: 'center',
		margin: 0,
    },
	blueContainer: {
		backgroundColor: '#2a4267',
		width: '100%',
		height: '30%',
		justifyContent: 'space-around',
		padding: '4%',
		paddingLeft: '5%',
	},
	subheading: {
		color: '#242424',
		textAlign: 'left',
		textAlign: 'left',
		paddingLeft: '5%',
		fontWeight: '700',
		marginBottom: '1%',
	},
	heading: {
		color: '#242424',
		textAlign: 'left',
		fontWeight: '800',
		fontSize: 17,
		paddingRight: '20%',
	},
	LogoImage: {
		maxWidth: '8%',
		maxHeight: '18%',
		marginBottom: '6%',
	},
	blueContainerTexts: {
		color: 'white',
		textAlign: 'left',
		fontWeight: '700',
		fontSize: 17,
	},
	blueContainerBackground: {
		maxWidth: '30%',
		maxHeight: '30%',
		marginBottom: '104%',
		position: 'absolute',
		marginLeft: '45%',
		marginTop: '0%',
	}

})
