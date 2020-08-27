import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1683FB',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee',
        
    },
    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#022D5D',
        fontSize:20,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#20226A',
        fontSize: 12,
        marginTop: 4,
    },

    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color : '#20226A',
    },
    footer: {
        backgroundColor: '#0F101C',
        padding: 24,
        alignItems: 'center',
        marginTop: 24,
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#20226A',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#022D5D',
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#022D5D',
        width: 56,
        height:56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    favorited: {
        backgroundColor: '#E33D3D',
    },

    contactButton: {
        backgroundColor: '#04D361;',
        flex: 1,
        height:56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16
    },


});

export default styles;
