import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Card(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.foto}></View>
            <View style={styles.info}>
                <Text style={styles.title}>Nome do Comércio</Text>
                <Text style={styles.adress}>Endereço</Text>
                <View style={{marginTop: 5}}>
                    <Text style={styles.subtitle}>Horário de Funcionamento</Text>
                    <Text style={styles.horario}>01:00 - 07:00</Text>
                </View>
            </View>
            <View style={styles.adicional}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '2.5%',
        marginTop: '4%',
        flexDirection: 'row'
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'black',
        margin: '3%'
    },
    info: {
        width: '60%',
        height: '90%',
        marginTop: '2.5%',
        fontFamily: 'Montserrat'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Montserrat'
    },
    address: {
        fontWeight: '100',
        fontSize: 12,
        fontFamily: 'Montserrat'
    },
    subtitle: {
        color: '#B9BCC3',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Montserrat'
    },
    horario: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Montserrat'

    }
})