import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import SoundPlayer from 'react-native-sound-player'
import { Colors } from '../../Assets/Colors/Colors'
// import Toast from 'react-native-toast-message'
import { Images } from '../../Assets/Images/Images'

export default function Audio({ data }) {
    const [AudioStatus, setAudioStatus] = useState(false)
    const [playBackCheck, setplayBackCheck] = useState(false)
    const PlayAuio = () => {
        try {
            if (!AudioStatus) {
                if (!playBackCheck) {
                    setplayBackCheck(true)
                    SoundPlayer.playUrl(data?.audio_file?.audio_url)
                    setAudioStatus(true)
                    return
                } else {
                    SoundPlayer.play()
                    setAudioStatus(true)
                }
            } else {
                SoundPlayer.pause()
                setAudioStatus(false)
            }
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    return (
        <ScrollView style={{ backgroundColor: Colors.MainBlue, }}>

            {
                data &&
                <View style={{ display: "flex", flexDirection: "row", gap: 10, width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    <Image style={{ height: 30, width: 30, marginHorizontal: 10 }} source={Images.JumbleAudio} />
                    <Image style={{ height: 50, width: 50, transform: [{ rotate: '180deg' }] }} source={Images.NextAudio} />
                    <TouchableOpacity onPress={() => { PlayAuio() }}>
                        <Image style={{ height: 100, width: 100 }} source={!AudioStatus ? Images.PauseButton : Images.PlayButton} />
                    </TouchableOpacity>
                    <Image style={{ height: 50, width: 50 }} source={Images.NextAudio} />
                    <Image style={{ height: 30, width: 30, marginHorizontal: 10 }} source={Images.LoopAudio} />
                </View>
            }



        </ScrollView>
    )
}