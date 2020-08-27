import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({

    container: { 
    backgroundColor: '#1683FB' ,
    justifyContent: 'center',
    padding: 40,
},

banner: {
    width: '100%',
    resizeMode: 'contain',
},

title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
},

titleBold: {
    fontFamily: 'Poppins_600SemiBold',

},

buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
}, 

button: {
    height: 150,
    width: '48%',
    backgroundColor: '#022D5D',
    borderRadius: 0,
    padding: 24,
    justifyContent: 'space-between',
},

buttonPrimary: { 
    backgroundColor: '#FF802F',  

},

buttonSecondary: {
    backgroundColor: '#13A5D7',
},

buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#EEEEEE',
    fontSize: 20,
},
totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2ff',
    fontSize: 12,
    lineHeigth: 20,
    maxWidth: 140,
    marginTop: 40,
},

}); 

export default styles; 