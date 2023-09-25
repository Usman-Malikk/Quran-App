import { View, Text, ScrollView, Alert } from 'react-native'
import React from 'react'
import { Colors } from '../../Assets/Colors/Colors'
import { useDispatch } from 'react-redux'
import { onLoading, onLoadingOff } from '../../Redux/Slices/loaderSlice'

export default function Recitation({ data, ArabicRecitaion }) {
  const dispatch = useDispatch()
  return (
    <ScrollView style={{ backgroundColor: Colors.MainBlue }}>
      {
        data?.map((item, index) => {
          if (index == 0) {
            dispatch(onLoading());
          }
          if (index == data.length - 1) {
            dispatch(onLoadingOff());
          }
          return <View style={{ alignItems: "center" }}>
            <View style={{ backgroundColor: '#121931', padding: 15, marginHorizontal: 10, borderRadius: 10, width: "100%" }}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ borderRadius: 50, backgroundColor: Colors.MainPurple, width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}>
                  <Text style={{ color: "white", fontWeight: "800" }}>{item?.verse_number}</Text>
                </View>
                <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
                  <Text style={{ color: "white", fontWeight: "900" }}>{item?.verse_key}</Text>
                </View>
              </View>
            </View>
            <View style={{ padding: 10, width: "100%" }}>
              <Text style={{ color: 'white', fontSize: 24, letterSpacing: 2 }}>
                {ArabicRecitaion[index]?.text_indopak}

              </Text>
              <Text style={{ color: 'white', fontSize: 16, marginTop: 10, color: Colors.TextBlue }}>
                {
                  item?.words.map((item, index) => item?.translation?.text)
                }
              </Text>

            </View>

            <View style={{ height: 1, backgroundColor: '#D1A7FE', width: '70%', marginVertical: 10 }}></View>

          </View>
        }
        )
      }



    </ScrollView>
  )
}