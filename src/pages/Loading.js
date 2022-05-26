import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export default function Loading() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image} blurRadius={2}>
                
                <View style={styles.logo}></View>

                <TouchableOpacity style={styles.btnAcess} onPress={() => navigation.navigate('Acess')}>
                    <Text style={styles.textBtn}> Iniciar </Text>
                </TouchableOpacity>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    logo: {
        width: 160,
        height: 160,
        backgroundColor: 'black',
        borderRadius: 80,
    },
    btnAcess: {
        width: 140,
        height: 60,
        borderRadius: 20,
        backgroundColor: '#246EE9',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textBtn: {
        color: 'white',
        fontSize: 22,
        textShadowColor: 'black'
    }
})