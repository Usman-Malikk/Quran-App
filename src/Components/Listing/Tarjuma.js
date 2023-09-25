import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../Assets/Colors/Colors'

export default function Tarjuma({data}) {
  return (
    <ScrollView style={{ backgroundColor: Colors.MainBlue }}>
      {
        data?.map((item,index)=>
          <View style={{alignItems:"center"}}>
          <View style={{ backgroundColor: '#121931', padding: 15, marginHorizontal: 10, borderRadius: 10,width:"100%" }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
              <View style={{ borderRadius: 50, backgroundColor: Colors.MainPurple, width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}>
                <Text style={{ color: "white", fontWeight: "800" }}>{item?.verse_number}</Text>
              </View>
              <View style={{ alignItems: "flex-end",justifyContent:"center" }}>
                <Text style={{ color: "white",fontWeight:"900" }}>{item?.verse_key}</Text>
              </View>
            </View>
          </View>
          <View style={{padding:10,width:"100%"}}>
            {/* <Text style={{color:'white',fontSize:20}}>
{
  item?.words.map((item,index)=>item?.transliteration?.text)
}

            </Text> */}
            <Text style={{color:'white',fontSize:16,marginTop:10,color:Colors.TextBlue}}>
            {
  item?.words.map((item,index)=>item?.translation?.text)
}
              </Text>
  
          </View>
  
          <View style={{ height: 1, backgroundColor: '#D1A7FE', width: '70%',marginVertical:10 }}></View>
  
        </View>
        )
      }
    
     

    </ScrollView>
  )
}