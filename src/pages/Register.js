import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button'

export default function acess() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.logo}></View>
            <Text style={styles.textLogo}>Fazer Login</Text>
            <TextInput/>

            <TouchableOpacity>
                <Text style={styles.btnSimples}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    logo: {
        width: 110,
        height: 110,
        backgroundColor: '#C4C4C4',
        borderRadius: 55,
        marginTop: 20
    },
    textLogo: {
        fontSize: 24,
        width: 280,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 60
    },
    btnSimples: {
        marginTop: 80,
        textDecorationLine: 'underline'
    }
})