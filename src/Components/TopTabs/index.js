import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Listing from '../Listing';
import { Colors } from '../../Assets/Colors/Colors';
const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "white", tabBarInactiveTintColor: Colors.TextBlue,
            tabBarStyle: {
                backgroundColor: Colors.MainBlue,
                marginBottom: 10
            }, tabBarIndicatorStyle: {
                backgroundColor: Colors.MainPurple
            },tabBarLabelStyle:{fontWeight:'700'},
           
        }}>
            <Tab.Screen  name="Surah" component={Listing} />
            <Tab.Screen name="Para" component={Listing} />
            <Tab.Screen name="page" component={Listing} />
            <Tab.Screen name="Hijib" component={Listing} />

        </Tab.Navigator>
    )
}