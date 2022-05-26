import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { AiOutlineEdit } from 'react-icons/Ai'

export default function EditButton() {
    return (
        <View style={styles.btn}>
            <AiOutlineEdit/>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 30,
        height: 30,
        marginLeft: 20
    }
})
