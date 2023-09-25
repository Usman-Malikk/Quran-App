import { View, Text, Image, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Assets/Images/Images'
import { Colors } from '../../Assets/Colors/Colors'
import Listing from '../../Components/Listing/ChapterListing'
import { DummyData } from '../../DummyData'
import TopTabs from '../../Components/TopTabs/HomeTabs'
// import { Entypo } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={{ backgroundColor: Colors.MainBlue, color: "white", height: "100%", paddingTop: 10, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 22, color: Colors.TextBlue, fontWeight: 500 }}>Assalamualaikum</Text>
      <Text style={{ letterSpacing: 1, fontSize: 28, color: 'white', fontWeight: 800, paddingTop: 5, }}>Usman Malik </Text>
      <View style={{ marginTop: 10, }}>
        <Image style={{ width: '100%', height: 200, objectFit: "contain" }} source={Images.HomeBanner} />
      </View>
      <TopTabs/>
    </View>
  )
}

export default Home