import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../Assets/Colors/Colors';
import { getChapterAudio, getChapterDetail, getChapterRecitation, getChapterRecitationInArabic, getChapters } from '../../API/chapters';
import { useDispatch } from 'react-redux';
import { onLoading, onLoadingOff } from '../../Redux/Slices/loaderSlice';
import { saveChaptersData } from '../../Redux/Slices/ListingSlice';
import ChapterListing from '../Listing/ChapterListing';
import PageListing from '../Listing/PageListing';
import Recitation from '../Listing/Recitation';
import Tarjuma from '../Listing/Tarjuma';
import Description from '../Listing/Description';
import Audio from '../Audio/Audio';
const Tab = createMaterialTopTabNavigator();

export default function Detailtabs({ id }) {
    const [RecitationdData, setRecitationdData] = useState([])
    const [description, setDescription] = useState()
    const [AudioData, setAudioData] = useState()
    const [ArabicRecitaion, setArabicRecitaion] = useState([])
    const dispatch = useDispatch()

    const getVerses = async () => {
        const result = await getChapterRecitation(dispatch, id)
        if (result.status === 200) {
            setRecitationdData(result?.data?.verses)
        }
    }
    const chapterAudio = async () => {
        const result = await getChapterAudio(dispatch, id)
        if (result.status === 200) {
            setAudioData(result?.data)
        }
    }
    const chapterDetail = async () => {
        const result = await getChapterDetail(dispatch, id)
        if (result.status === 200) {
            setDescription(result?.data?.chapter_info)
        }
    }
    const chapterRecitationInArabic=async()=>
    {
        const result = await getChapterRecitationInArabic(dispatch,id)
        if (result.status === 200) {
           setArabicRecitaion(result?.data?.verses)
        }
    }
    useEffect(() => {
        getVerses()
        chapterAudio()
        chapterDetail()
        chapterRecitationInArabic()
    }, [])

    return (
        <Tab.Navigator style={{ backgroundColor: Colors.MainBlue }} screenOptions={{
            tabBarActiveTintColor: "white", tabBarInactiveTintColor: Colors.TextBlue,
            tabBarStyle: {
                backgroundColor: Colors.MainBlue,
                marginBottom: 10,
            }, tabBarIndicatorStyle: {
                backgroundColor: Colors.MainPurple
            }, tabBarLabelStyle: { fontWeight: '700', fontSize: 12 },
        }}>
            <Tab.Screen name="Verses" style={{ backgroundColor: Colors.MainBlue }}
                children={() => <Recitation data={RecitationdData} ArabicRecitaion={ArabicRecitaion}/>}
            />
            <Tab.Screen name="Tarjuma"
                children={() => <Tarjuma data={RecitationdData} />}
            />
            <Tab.Screen name="Audio" 
             children={() => <Audio data={AudioData} />}
            />
            <Tab.Screen name="Detail"
                children={() => <Description data={description} />}
            />
           
        </Tab.Navigator>
    )
}