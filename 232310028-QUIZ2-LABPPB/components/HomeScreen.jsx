import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native-web'

export default function HomeScreen({Navigation}) {
  return (
    <View>
        <TouchableOpacity style={{backgroundColor: 'pink'}} onPress={()=> Navigation.navigate('ProfileScreen')}>
            <Text>pencet nih!</Text>
        </TouchableOpacity>
    </View>
  )
}
