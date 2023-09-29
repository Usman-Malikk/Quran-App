import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useDebugValue, useEffect, useState } from 'react'
import { Colors } from '../Assets/Colors/Colors'
import { Images } from '../Assets/Images/Images'
import axios from 'axios'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { onLoading, onLoadingOff } from '../Redux/Slices/loaderSlice'

export default function Prayer() {
  const [time, setTime] = useState('')
  const dispatch = useDispatch()
  const [PrayerTimes, setPrayerTimes] = useState()

  const callApi = async () => {
    try {
      dispatch(onLoading())

      const response = await axios.get(
        `http://api.aladhan.com/v1/timingsByCity?city=Karachi&country=Pakistan&method=2`
      );
      setPrayerTimes(response.data.data.timings);
    } catch (error) {
      console.error('Error fetching prayer times:', error);
    }
    finally {
      dispatch(onLoadingOff())
    }
  }

  useEffect(() => {
    callApi()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current time every second
      setTime(moment().format('LTS'));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);



  return (
    <View style={{ backgroundColor: Colors.MainBlue, flex: 1 }}>
      <ImageBackground style={{ height: 250, alignItems: "center", justifyContent: "space-between", padding: 10 }} source={Images.prayerBG}>
        <View style={{ width: "100%", }}>
          <Text style={{ color: 'white', fontWeight: "900", fontSize: 30, fontWeight: "900", }}>
            {/* Zohar Time */}
          </Text>
        </View>
        <View style={{ width: "100%", alignItems: 'center', gap: 15 }}>
          <Text style={{ color: 'white', fontWeight: "800", fontSize: 25 }}>
            Time : {time}
          </Text>
          <Text style={{ color: 'white', fontWeight: "300", fontSize: 16, fontStyle: "italic", }}>
            Beshak Namaz har kam se behtar hy!
          </Text>
        </View>
      </ImageBackground>


      {/* Date Render */}
      {
        PrayerTimes &&
        <View style={{ padding: 10, gap: 20 }}>
        <View style={{ backgroundColor: "white", padding: 10, borderRadius: 50, alignItems: "center" }}>
          <Text style={{ fontWeight: "800", color: Colors.MainBlue, fontSize: 20 }}>20 April 2023</Text>
        </View>
        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Image style={{ height: 50, width: 50 }} source={Images.Sunrise} />
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>Fajar</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>{moment( PrayerTimes?.Fajr, 'HH:mm').format('h:mm A')  }</Text>

          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Image style={{ height: 40, width: 50 }} source={Images.DuharNamaz} />
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>Duhar</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>{ moment( PrayerTimes?.Dhuhr, 'HH:mm').format('h:mm A') }</Text>

          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Image style={{ height: 50, width: 50 }} source={Images.Sunrise} />
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>Asar</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>{ moment( PrayerTimes?.Asr, 'HH:mm').format('h:mm A') }</Text>

          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Image style={{ height: 40, width: 50 }} source={Images.cloudyNights} />
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>Maghrib</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>{moment( PrayerTimes?.Maghrib, 'HH:mm').format('h:mm A') }</Text>

          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Image style={{ height: 50, width: 50 }} source={Images.Sunrise} />
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>Isha</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>{moment( PrayerTimes?.Isha, 'HH:mm').format('h:mm A')}</Text>

          </View>
        </View>
      </View>
      }
    
    </View>
  )
}





