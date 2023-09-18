import { View, Text,Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Images } from '../../Assets/Images/Images'
import { Colors } from '../../Assets/Colors/Colors'
const  CustomSplashScreen = ({navigation}) => {
  return (
    <View style={{display:'flex',flexDirection:"column",alignItems:'center',
    justifyContent:'center',width:'100%',height:"100%"
    ,backgroundColor:Colors.MainBlue
    }}>
      <View style={{flexDirection:'column',gap:8,marginBottom:40}}>
        <Text style={{textAlign:'center',color:'white',fontSize:40,fontWeight:900}}>Quran App</Text>
        <Text style={{textAlign:'center',color:Colors.TextBlue,fontSize:16,letterSpacing:1,fontWeight:300}}>Learn Quran and</Text>
       <Text style={{textAlign:'center',color:Colors.TextBlue,fontSize:16,letterSpacing:1,fontWeight:300}}>Recites once everyday</Text>
      </View>
      <View style={{width:"100%",alignItems:'center',position:'relative'}}>
      <Image
        style={{width:'90%',borderRadius:40}}
        source={Images.Splashbanner}
        />
        <TouchableOpacity onPress={() =>{navigation.navigate('LoginHome')}} style={{backgroundColor:Colors.BrownButtonColor,
          padding:15,paddingHorizontal:40,borderRadius:30,position:'absolute',bottom:-20,zIndex:999,}}>
          <Text style={{color:Colors.MainBlue,fontWeight:800,fontSize:20}}>
          Get Started 
          </Text>
        </TouchableOpacity>
        </View>



    </View>
  )
}

export default CustomSplashScreen