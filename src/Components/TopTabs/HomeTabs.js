import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../Assets/Colors/Colors';
import { getChapters } from '../../API/chapters';
import { useDispatch } from 'react-redux';
import { onLoading, onLoadingOff } from '../../Redux/Slices/loaderSlice';
import { saveChaptersData } from '../../Redux/Slices/ListingSlice';
import ChapterListing from '../Listing/ChapterListing';
import PageListing from '../Listing/PageListing';
const Tab = createMaterialTopTabNavigator();

export default function TopTabs({navigation}) {
    const dispatch = useDispatch()
    const getAllChapters = async () => {
        const result = await getChapters(dispatch)
        if (result.status === 200) {
            dispatch(saveChaptersData(result?.data?.chapters))
        }
    }
    useEffect(() => {
        getAllChapters()
    }, [])

    return (
        <Tab.Navigator style={{backgroundColor:Colors.MainBlue}} screenOptions={{
            tabBarActiveTintColor: "white", tabBarInactiveTintColor: Colors.TextBlue,
            tabBarStyle: {
                backgroundColor: Colors.MainBlue,
                marginBottom: 10,
            }, tabBarIndicatorStyle: {
                backgroundColor: Colors.MainPurple
            }, tabBarLabelStyle: { fontWeight: '700', fontSize: 10 },
            
            

        }}>
            <Tab.Screen name="Chapters" style={{backgroundColor:Colors.MainBlue}}  component={ChapterListing} />
            <Tab.Screen name="Para" component={ChapterListing} />
            <Tab.Screen name="page" component={PageListing} />
            <Tab.Screen name="Hijib" component={ChapterListing} />
        </Tab.Navigator>
    )
}