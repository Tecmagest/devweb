import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';


const { Navigator, Screen} = createBottomTabNavigator();

function StudyTabs(){
    return(
        <Navigator
        tabBarOptions = {{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
             },
            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
             },
             iconStyle: {
                 flex: 0,
                 width: 20,
                 height: 20,
             },
             labelStyle:{
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16,
             },
             inactiveBackgroundColor: '#fafafc',
             activeBackgroundColor: '#E6E6F0',
             inactiveTintColor: '#c1bccc',
             activeTintColor: '#022D5D'
          }
        }       
        > 
        <Screen name ="TeacherList" 
            component = {TeacherList} 
            options= { { tabBarLabel: 'Professor',
            tabBarIcon: ({ color, size, focused }) => {
        return (
        <Ionicons name = 'ios-esel' size = {size} color = { focused? '#1683FB': color } />  
        );
        }
        }} 
        />
        <Screen name ="Favorites" 
            component = {Favorites}
            options= { { tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color, size, focused}) => {
                return (
                <Ionicons name = 'ios-heart' size = {size} color = { focused? '#1683FB': color } />  
                );
            }
        }} 
        />
        </Navigator>

    );
}

export default StudyTabs;
