import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {EvilIcons} from '@expo/vector-icons'



const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="FirstScreen">
    
      <BottomTab.Screen 
      name="FirstScreen"
      component={FirstScreenNavigator}
      options={{tabBarIcon: () => <EvilIcons name ="star" size={35} color="black"/>}}
      />

     <BottomTab.Screen 
      name="SearchScreen"
      component={SearchScreenNavigator}
      options={{tabBarIcon: () => <EvilIcons name ="search" size={35} color="black"/>}}
      />
   
    </BottomTab.Navigator>
  );
}

import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../../screens/FirstScreen';

const FirstScreenStack = createStackNavigator()
function FirstScreenNavigator() {
    return (
        <FirstScreenStack.Navigator>
        <FirstScreenStack.Screen 
          name="FirstScreen"
          component={FirstScreen}
          options={{headerTitle: 'Single-Level Stack'}} />
      </FirstScreenStack.Navigator>
    )
}

import SearchScreen from '../../screens/SearchScreen';

const SearchScreenStack = createStackNavigator()
function SearchScreenNavigator() {
    return (
        <SearchScreenStack.Navigator>
        <SearchScreenStack.Screen 
          name="SearchScreen"
          component={SearchScreen}
          options={{headerTitle: 'Searching Page'}} />
      </SearchScreenStack.Navigator>
    )
}