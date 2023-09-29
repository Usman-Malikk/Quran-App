import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Assets/Colors/Colors'
import { Images } from '../Assets/Images/Images'

export default function Search() {
  const [search, setSearch] = useState("")
  return (
    <View style={{ flex: 1, backgroundColor: Colors.MainBlue, }}>
      <View style={{ flexDirection: "row", width: "100%", marginTop: 30, alignItems: "center",  }}>
        <TextInput
        placeholder='Search Chapters'
        placeholderTextColor="#f1f2f3" 
          style={{ backgroundColor: '#121931', height: 50, color: "white", flex: 1, fontSize: 18,paddingHorizontal:10 }}
        />
        <TouchableOpacity style={{ backgroundColor: Colors.MainBlue,display:'flex',alignItems:"center",backgroundColor:'#f1f2f3',justifyContent:'center',height:50,width:60 }}>
          <Image source={Images.SearchIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}