import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({

    container: { 
    backgroundColor: '#F0F0F7' ,
    justifyContent: 'center',
    padding: 40,
},

content: {
    flex: 1,
    justifyContent:'center',

},

title: {
    fontFamily: 'Archivo_700Bold',
    color: '#ffffff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,

},

descricao: {
    marginTop: 24,
    color: '#D4C2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppin_400Regular',
    maxWidth: 240,
},

okBotao: {
    marginVertical: 40,
    backgroundColor: '#FF6600',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
},

okBotaoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold'
},

}); 

export default styles; 