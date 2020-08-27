import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';
import PageHeader from '../../components/pageHeader';
import TeacherItem, { Teacher } from '../../components/teacherItem';
import api from '../../services/api';

import styles from './styles';


function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [ isfiltersVisible, setIsFiltersVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function handleToggleFlitersVisible(){
        setIsFiltersVisible(!isfiltersVisible);
    }

    async function hendleFiltersSubmit(){
        const response = await api.get('classes', {
            params: {
              subject,
              week_day,
              time,
            }   
          });
          setIsFiltersVisible(false);
          setTeachers(response.data);
        
    }
    return (
    <View style = { styles.container}>
    <PageHeader title = "Professores disponíveis"
     headerRight = { ( <BorderlessButton onPress = {handleToggleFlitersVisible}>
         <Feather name = "filter" size = {20} color = "#FFF" />
     </BorderlessButton>)} > 
    { isfiltersVisible && (
        <View style = { styles.searchForm} >
            <Text style ={ styles.label} >Matéria</Text>
                <TextInput style = { styles.input}
                value = { subject} onChangeText = { Text => setSubject (Text)}
                    placeholder = "Qual a Matéria?" 
                    placeholderTextColor = "#C1BCCC" 
                />
                <View style ={styles.inputGroup}>
                    <View style ={styles.inputBlock}>
                    <Text style ={ styles.label}>Dia da Semana</Text>
                    <TextInput style = { styles.input}
                     value = {week_day} onChangeText = { Text => setWeekDay (Text)}
                     placeholder = "Qual o Dia?" 
                     placeholderTextColor = "#C1BCCC"
                    />
                    </View> 
                    <View style ={styles.inputBlock}>
                    <Text style ={ styles.label}>Horário</Text>
                    <TextInput style = { styles.input} 
                    value = {time} onChangeText = { Text => setTime (Text)}
                    placeholder = "Qual horário?"
                    placeholderTextColor = "#C1BCCC" 
                    />
                    </View> 
                </View>  
                <RectButton onPress = {hendleFiltersSubmit} style ={ styles.submitButton}  >
                    <Text style ={styles.submitButtonText} >Filtrar</Text>
                    </RectButton>  
            </View>
    )} 
    </PageHeader>
    <ScrollView style = {styles.teacherList} 
    contentContainerStyle = {{ 
        paddingHorizontal: 16, paddingBottom: 16, }}  >
        {teachers.map((teacher:Teacher) => {
            return <TeacherItem key = {teacher.id} teacher = {teacher}/>
        })}
        
    </ScrollView>
    </View>
    ); 
}

export default TeacherList;