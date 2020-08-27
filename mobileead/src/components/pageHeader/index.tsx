import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../images/icons/back.png';
import LogoImage from '../../images/logo.png';
import styles from './styles';


interface PageHeaderProps{
    title: string;
    headerRight?: ReactNode;

}

const PageHeader: React.FC <PageHeaderProps> = ({title, headerRight, children}) => {

    const {navigate} = useNavigation();
    function handleGoBack() {
        navigate('Landing');
    }
    return (
    <View style = { styles.container}>
        <View style = { styles.topBar}>
        <BorderlessButton onPress = { handleGoBack}>
        <Image source = {BackIcon } resizeMode = "contain" />
        </BorderlessButton>
        </View>
        <Image source = {LogoImage } resizeMode = "contain" />
        <View style = {styles.header }> 
        <Text style = {styles.title }>{title}</Text>
        {headerRight }
        {children}
        </View>
    </View>
    )
}



export default PageHeader;