import { View, Text, ImageBackground, Alert, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Images } from '../../Assets/Images/Images';
import { Colors } from '../../Assets/Colors/Colors';

export default function CustomDrawer(props) {
    let { navigation } = props

    return (
        <View style={{ backgroundColor: "white", display: "flex", flexDirection: "column", height: "100%" }}>
            <View >
                <ImageBackground source={{uri:"https://images.unsplash.com/photo-1603437873662-dc1f44901825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"}}
                    style={{ height: 200, objectFit: "contain",width:"100%",justifyContent:"flex-end" }}

                >
                    <TouchableOpacity style={{ width: '100%' }} onPress={() => { navigation.navigate('Home') }}>

                        {/* <Text style={{ color: "white", textAlign: 'center' }}>Hello world</Text> */}

                        <Image source={Images.ProfilePicture} style={{width:100,height:100,objectFit:"contain",marginLeft:-10}}/>
                        <Text style={{marginTop:-20,marginBottom:20,marginLeft:10,fontWeight:500,color:Colors.MainBlue,fontSize:20}}>User </Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
            <DrawerContentScrollView {...props} >
                <View>
                    <DrawerItemList {...props} />
                   
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity style={{height:70,borderWidth:0.1,borderTopColor:"lightgray",padding:10,paddingHorizontal:20}}><Text style={{  fontSize: 16,color:Colors.MainBlue,fontWeight:"600" }}> Settings</Text></TouchableOpacity>
        </View>
    )
}
