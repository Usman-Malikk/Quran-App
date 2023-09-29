import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Colors } from '../Assets/Colors/Colors'
import { Images } from '../Assets/Images/Images'
import Toast from 'react-native-toast-message'


export default function Profile() {
const handleSubmit = ()=>
{
    Toast.show({
        type: 'success',
        text1: 'Profile is updated successfully.'
      });
}

    return (
        <View style={{ flex: 1, backgroundColor: Colors.MainBlue,gap:20,padding:10 }}>
            <ImageBackground source={Images.QuranLight}>
            <View style={{height:150,width:150,borderRadius:50,backgroundColor:'#121931',marginTop:20,borderStyle:"dotted",borderWidth:2,borderColor:Colors.TextBlue,alignItems:'center',justifyContent:'center',}}>
                <Text style={{color:Colors.TextBlue}}>Upload Image</Text>
            </View>
            </ImageBackground>
           
            <View style={{height:50}}>
                <TextInput
                    placeholder='Enter Name'
                    placeholderTextColor={Colors.TextBlue}
                    style={{ backgroundColor: '#121931', color: Colors.Text, flex: 1, fontSize: 18, paddingHorizontal: 10 }}
                />
            </View>
            <View style={{height:50}}>
                <TextInput
                    placeholder='Enter Password'
                    placeholderTextColor={Colors.TextBlue}
                    style={{ backgroundColor: '#121931', color:Colors.Text, flex: 1, fontSize: 18, paddingHorizontal: 10 }}
                />
            </View>
            <View style={{alignItems:"flex-end"}}>
               <TouchableOpacity onPress={handleSubmit} style={{backgroundColor:Colors.MainPurple,alignItems:'center',padding:10,paddingHorizontal:50,borderRadius:10}}><Text style={{color:"white",fontWeight:'800'}}>Save</Text></TouchableOpacity>
            </View>
        </View>
    )
}