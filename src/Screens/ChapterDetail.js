import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../Assets/Colors/Colors'
import { Images } from '../Assets/Images/Images'
import TopTabs from '../Components/TopTabs/HomeTabs'
import Detailtabs from '../Components/TopTabs/ChapterDetailTabs'

export default function ChapterDetail({ route }) {
  const { id, item } = route.params
  useEffect(() => {

  }, [route.params])
  return (
    <View style={{ backgroundColor: Colors.MainBlue, height: "100%" }}>
      <ImageBackground source={Images.ChapterCover} style={{
        alignItems: "center",
        justifyContent: "space-between",
        height: 250,
        padding: 10,
        paddingVertical: 30,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius:50
      }}>
        <View style={{ width: "100%", alignItems: 'center', gap: 10, textAlign: 'center',color:"white" }}>
          <Text style={{fontSize:28,color:"white",fontWeight:"800"}}>{item?.name_simple}</Text>
          <Text style={{fontSize:20,color:"white",fontWeight:"600"}}>{item?.translated_name?.name}</Text>
          <View style={{ height: 1, backgroundColor: '#D1A7FE', width: '70%' }}></View>
         <View style={{flexDirection:"row",gap:10,alignItems:'center'}}>
          <Text style={{fontSize:18,color:"white",fontWeight:"700"}}>
            { item?.revelation_place.toUpperCase()}
          </Text>
          <View style={{ height: 7, width: 7, backgroundColor: "#D7ACFE", borderRadius: 50 }}></View>
          <Text style={{fontSize:18,color:"white",fontWeight:"700"}}>
            {item?.verses_count}  VERSES
          </Text>
         </View>
        </View>
        <Image source={Images.Bismillah} />
      </ImageBackground>

      <Detailtabs id={item?.id}/>
    </View>
  )
}