import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Card(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        opacity: .9
    },
    texto: {
        fontWeight: 'bold',
        fontFamily: 'Montserrat'
    }
})