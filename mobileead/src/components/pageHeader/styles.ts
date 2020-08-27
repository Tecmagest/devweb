import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1683FB',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFFFFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 16,
        marginVertical: 40,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


});

export default styles;