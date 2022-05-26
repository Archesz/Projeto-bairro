import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import Card from '../components/CardComercio'

export default function Comercios() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <Text style={styles.texto}>Padaria</Text>
                </View>
            </View>

            <ScrollView> 
                <Card onPress={() => navigation.navigate('Comercio')}/>
                <Card onPress={() => navigation.navigate('Comercio')}/>
                <Card onPress={() => navigation.navigate('Comercio')}/>
                <Card onPress={() => navigation.navigate('Comercio')}/>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }, 
    header: {
        width: '100%',
        height: 180,
        alignItems: 'center',
    },
    searchBar: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '80%',
        height: 40,
        borderRadius: 50,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})