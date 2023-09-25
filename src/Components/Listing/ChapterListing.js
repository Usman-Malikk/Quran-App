import { View, Text, Image, FlatList, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import React from 'react'
import { Images } from '../../Assets/Images/Images'
import { Colors } from '../../Assets/Colors/Colors'
import { useSelector, useDispatch } from 'react-redux'

export default function ChapterListing({navigation}) {
    const chaptersData = useSelector((state) => state.listing.chapters)

    return (
        <FlatList
        style={{backgroundColor:Colors.MainBlue}}
            data={chaptersData}
            renderItem={({ item }) => <TouchableOpacity onPress={()=>{navigation.navigate('ChapterDetail',{id:item.id,item:item})}} style={{ flexDirection: 'row', alignItems: 'center', gap: 15, borderWidth: 1, borderBottomColor: '#2E3553', paddingVertical: 10, backgroundColor: Colors.MainBlue }} >
                <ImageBackground source={Images.Groupnumber} style={{height:40,width:40,display:'flex',alignItems:'center',justifyContent:"center"}} >
                    <Text style={{ color: "white",  fontWeight: "700" }}>{item?.id}</Text>
                </ImageBackground>
                <View style={{ flex: 1, }}>
                    <Text style={{ color: 'white', fontWeight: "800", fontSize: 20, marginBottom: 5 }}>{item?.name_simple}</Text>
                    <View style={{ color: Colors.TextBlue, display: "flex", flexDirection: "row", alignItems: 'center', gap: 10, fontWeight: '600' }}>
                        <Text style={{ color: Colors.TextBlue, }}>
                            {item?.revelation_place}
                        </Text>
                        <View style={{ height: 7, width: 7, backgroundColor: "#444C5F", borderRadius: 50 }}></View>
                        <Text style={{ color: Colors.TextBlue, }}>
                            {item?.verses_count}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{ color: Colors.MainPurple, fontWeight: "800", fontSize: 22 }}>{item?.name_arabic} </Text>
                </View>
            </TouchableOpacity>}
            keyExtractor={item => item.id}
        />
    )
}