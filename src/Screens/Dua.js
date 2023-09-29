import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../Assets/Colors/Colors'
import { Images } from '../Assets/Images/Images'
import { getChapterRecitation, getChapterRecitationInArabic } from '../API/chapters'
import { useDispatch } from 'react-redux'
import { onLoading, onLoadingOff } from '../Redux/Slices/loaderSlice'

export default function Dua() {
    const dispatch = useDispatch()
    const [RecitationdData, setRecitationdData] = useState([])
    console.log("🚀 ~ file: Dua.js:9 ~ Dua ~ RecitationdData:", RecitationdData)
    const [ArabicRecitaion, setArabicRecitaion] = useState([])
    console.log("🚀 ~ file: Dua.js:11 ~ Dua ~ ArabicRecitaion:", ArabicRecitaion)
    const getRandomDua = () => {
        const min = 1;
        const max = 114;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNum);
        chapterRecitationInArabic(randomNum)
        getVerses(randomNum)

    }

    const chapterRecitationInArabic=async(id)=>
    {
        console.log(id)
        const result = await getChapterRecitationInArabic(dispatch,id)
        if (result.status === 200) {
           setArabicRecitaion(result?.data?.verses)
        }
    }
    const getVerses = async (id) => {
        const result = await getChapterRecitation(dispatch, id)
        if (result.status === 200) {
            setRecitationdData(result?.data?.verses)
        }
    }




    useEffect(() => {
        // const min = 1;
        // const max = 114;
        // const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randomNum);
        // chapterRecitationInArabic(randomNum)
        // getVerses(randomNum)   
        getRandomDua()
     }, [])

    return (
        <View style={{ flex: 1, backgroundColor: Colors.MainBlue }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 10, }} >
                <View style={{ justifyContent: "space-between" }}>
                    <Text style={{ color: "white", fontSize: 30, fontWeight: '200' }}>Daily Ayat</Text>
                    <TouchableOpacity onPress={getRandomDua} style={{ backgroundColor: Colors.MainPurple, padding: 10, borderRadius: 10, alignItems: "center" }}>
                        <Text style={{ color: "white", fontWeight: 500, fontSize: 16 }}>Random Ayat</Text>
                    </TouchableOpacity>
                </View>
                <Image style={{ height: 250, width: 250, objectFit: "contain" }} source={Images.NightPrayer} />
            </View>

            {/* Random ayat Rander here */}
            <ScrollView style={{ backgroundColor: Colors.MainBlue,marginBottom:100 }}>
      {
        RecitationdData?.map((item, index) => {
        //   if (index == 0) {
        //     dispatch(onLoading());
        //   }
        //   if (index == .length - 1) {
        //     dispatch(onLoadingOff());
        //   }
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
              {/* <Text style={{ color: 'white', fontSize: 16, marginTop: 10, color: Colors.TextBlue }}>
                {
                  item?.words.map((item, index) => item?.translation?.text)
                }
              </Text> */}

            </View>

            <View style={{ height: 1, backgroundColor: '#D1A7FE', width: '70%', marginVertical: 10 }}></View>

          </View>
        }
        )
      }



    </ScrollView>
        </View>
    )
}