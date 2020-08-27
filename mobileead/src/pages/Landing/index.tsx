import React, { useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services';
import styles from '../styles';
import landingImg from '../../images/landing.png';
import studyIcon from '../../images/icons/study.png';
import giveClassesIcon from '../../images/icons/give-classes.png';
import heartIcon from '../../images/icons/heart.png';



function Landing() {
    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections ] = useState(0); 
    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data.total;
            setTotalConnections(total);
        })
    },[]);

    function handleNavigateToGiveClassesPage(){
       navigate('GiveClasses');
    }
    function handleNavigateToStudyPages() {
        navigate('Study');
    }
return (
    <view style = {styles.container }>
        <Image source ={landingImg} style = { styles.banner} />
        <Text style ={styles.title}>
        Seja Bem-vindo, {'\n'} 
        <Text style= {styles.titleBold}>O que deseja fazer?</Text>
        </Text>
        <View style = {styles.buttonsContainer }>
        <RectButton onPress = {handleNavigateToStudyPages}
        style= { [styles.button, styles.buttonPrimary ]}>
        <Image source = { studyIcon } />
        <Text style= {styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton onPress = {handleNavigateToGiveClassesPage} 
        style= { [styles.button, styles.buttonSecondary ]}>
        <Image source = { giveClassesIcon } />
        <Text style= {styles.buttonText}>Ensinar</Text>
        </RectButton>
        </View>    
        <Text style = {styles.totalConnections }>
         Total de {totalConnections} conexções já realizadas.{' '}
        <Image source= {heartIcon } />
        </Text>
    </view>
);
}
export default Landing;
