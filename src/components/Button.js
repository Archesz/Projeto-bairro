import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function teste(){
    alert('ok')
}


export default function Button(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress} id={props.id} onPress={props.onPress}>
            <Text style={styles.textBtn}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 290,
        height: 60,
        borderRadius: 40,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    textBtn: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat'
    }
})