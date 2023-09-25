import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Assets/Images/Images'
import { Colors } from '../../Assets/Colors/Colors'
import { useSelector, useDispatch } from 'react-redux'

export default function PageListing() {
    const chaptersData = useSelector((state) => state.listing.chapters)

    return (
        <FlatList
            data={chaptersData}
            renderItem={({ item }) => <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, borderWidth: 1, borderBottomColor: '#2E3553', paddingVertical: 10, backgroundColor: Colors.MainBlue }} >
                <View style={{ position: "relative" }}>
                    <Image source={Images.Groupnumber} />
                    <Text style={{ position: 'absolute', color: "white", left: '40%', top: "15%", fontWeight: "700" }}>{item?.id}</Text>
                </View>
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
            </View>}
            keyExtractor={item => item.id}
        />
    )
}