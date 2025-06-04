import React from 'react';
import { StyleSheet, View } from 'react-native';

const ProfileScreen = () => {
    return (
        <View>
            <Text>Fadhil Luki Pratama</Text>
            <Text>fadhil.luki@gmail.com</Text>
            <image style={{width: 100, height: 100}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQGV_JGwLd60Gur116jHPcO9j7iaJPvlstA&s'}}></image>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProfileScreen;
