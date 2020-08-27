import React from 'react';
import { View, ImageBackground, Text} from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import giveClassesBgImage from '../../images/icons/give-classes-background.png';
import styles from '../styles';



function GiveClasses() {
    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }
    return (
    <View style = { styles.container}>
        <ImageBackground 
        resizeMode = 'contain'
        source= {giveClassesBgImage}
        style= {styles.content}>
            <Text style= { styles.title}>Quem ser um Professor? </Text>
            <Text style= { styles.descricao}>Para começar, você presiça se cadastrar como Professor na nossa Pltaforma Web
            </Text>
        </ImageBackground>
        <RectButton onPress = {handleNavigateBack } style = { styles.okBotao}>
            <Text style = { styles.okBotaoTexto}>Ok, tudo bem</Text>
        </RectButton>
    </View>
    );
}




export default GiveClasses;